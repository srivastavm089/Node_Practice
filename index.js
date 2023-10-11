const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/School");
const productS = new mongoose.Schema({
  name: String,
  age: Number,
});


const saveInDB = async () => {
  const Productmodal = mongoose.model("students", productS);
  let data = new Productmodal({name:'dhoni',age:45})
  data.save();

};
const updateInDB = async () => {
   const Productmodal = mongoose.model("students", productS);
   let data = await Productmodal.updateOne({name:'papu'},{$set:{age:25}})

};
const delteInDB = async ()=>{
   const Productmodal = mongoose.model("students", productS);
    await Productmodal.deleteOne({name:"papu"});
}
const findInDB =async()=>{
   const Productmodal = mongoose.model("students", productS);
  const data = await Productmodal.find({name:'vivo'})
  console.log(data)
}


saveInDB()