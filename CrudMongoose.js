const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/School';
mongoose.connect(url);

const productSchema = new mongoose.Schema({
    name:String,
    age:Number
})
const addOne = async ()=>{
    const product = mongoose.model('students', productSchema);
    const data = new product({name:'anshu', age:30});
    const result = await data.save();
   
}
const update = async ()=>{
    const product = mongoose.model('students', productSchema);
    const data = await product.updateOne({name:'anshu'}, {$set:{name:'Ajay', age:'60'}})
    console.log(data)
}
const read = async ()=>{
    const product = mongoose.model('students', productSchema);
    const data = await product.find()
    console.log(data);


}
const del = async ()=>{
    const product = mongoose.model('students', productSchema);
    const data = await product.deleteOne({name:'prakhar'});
    console.log(data)
}
addOne()

