const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

var Employee = require("../models/employee");

router.post("/newemployee", (req,res)=>{
    if(req.body){
        Create(req.body, res);
    } else {
        res.status(200).json({status:"Not inserted"});
    }
})

router.get("/getemployees", (req, res)=>{
    Employee.find(req.query).exec()
        .then((doc) => {
            if (doc.length == 0) {
                res.status(200).json({ status: "error" })
            } else {
                var response = {
                    status: "ok",
                    data: doc
                }

                res.status(200).json(response)
            }

        })
        .catch(err => {
            console.log(err);
            res.status(200).json({ status: "error" });
        })
})

router.post("/updateemployee/:id", (req,res)=>{
    var id = parseInt(req.params.id);
    console.log("Updating profile ", id);
    console.log("New updated body ", req.body);
    Employee.findOneAndUpdate({ "id": id }, req.body, { new: true }).exec()
        .then((doc) => {
            if (doc) {
                var response = {
                    status: "ok",
                    data: doc
                }

                res.status(200).json(response);
            } else {
                res.status(200).json({ status: "Employee info is not updated" })
            }
        })
})

router.get("/getemployee/:id", (req, res) => {
    var id = parseInt(req.params.id);
    console.log(id);
    Employee.findOne({ "id": id }).exec()
        .then((doc) => {
            if (doc) {
                var response = {
                    status: "ok",
                    data: doc
                }
                res.status(200).json(response);
            } else {
                res.status(200).json({ status: "Account is not found" });
            }
        })
})

function Create(obj, res) {
    var firstID = 1;
    const employee = new Employee(obj);
    Employee.findOne().sort({ "id": -1 })
        .then((doc) => {
            if (doc) {
                doc.id = parseInt(doc.id) + 1;
            } else {
                doc = {};
                doc.id = firstID;
            }
            employee.created_date = Date.now();
            employee.id = doc.id;
            employee.save()
                .then((doc) => {
                    if (doc) {
                        let response = {
                            status: "ok",
                            data: doc
                        }
                        res.status(200).json(response);
                    } else {
                        res.status(500).json({ error: "error" });
                    }
                })
        })
}

module.exports = router;