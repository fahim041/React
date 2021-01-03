const express = require('express');
const router = express.Router();
const Employee = require("./Employee");

router.use("/", Employee);


module.exports = router;