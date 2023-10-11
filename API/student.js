const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name:String,
    age:Number,

});

module.exports = mongoose.model("students", productSchema);


