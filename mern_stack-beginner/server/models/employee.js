const mongoose = require('mongoose');

const account = mongoose.Schema({
    id : Number,
    fullname : String,
    mobile : String,
    email : String,
    age : Number,
    bloodGroup : String,
    address : String
});

module.exports = mongoose.model('accounts', account);