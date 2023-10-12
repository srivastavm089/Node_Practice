const express = require("express");
require("./config");
const Product = require("./student");

const app = express();
app.use(express.json());

app.post("/create", async (req, res) => {
  let data = new Product(req.body);
  let result = await data.save();
  console.log(result);
  res.send("Done");
});
app.get("/list", async (req, res) => {
  let data = await Product.find();
  res.send(data);
});
app.delete("/delete/:_id", async (req, res) => {
  let data = await Product.deleteOne(req.params);

  res.send(data);
});
app.put("/update/:_id", async (req, res) => {
  let data = await Product.updateOne(req.params, { $set: req.body });
  res.send(data);
});
app.get("/search/:key", async (req, res) => {
  console.log(req.params.key);
  let data = await Product.find({
    "$or": [
        { "name": { $regex:req.params.key}},
       
        

    ]   
  });
  console.log(data)
  res.send("search done");
});

app.listen(5000);

// 6523adffa029d7d5572f335d
