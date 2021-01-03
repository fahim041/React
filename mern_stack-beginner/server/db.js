const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/crud_mern", { useUnifiedTopology: true, useNewUrlParser: true },
err => {
    if(!err){
        console.log('DB Connected');
    } else {
        console.log('error connecting mongodb', err);
    }
})