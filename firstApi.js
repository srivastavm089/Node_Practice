const express = require('express');
const app= express();
const getData = require('./mongodb') ;
const mongoDb = require('mongodb')

app.use(express.json());
app.get('/', async (req,res)=>{
    let data = await getData()
    data = await data.find().toArray();
  
    res.send(data)
} )
app.post('/', async(req,res)=>{
    let data = await getData();
    let result = await data.insertOne(req.body);
        res.send(result)    

    
})
app.put('/', async(req,res)=>{
    let data =await getData();
 await data.updateOne({name:req.body.name}, {$set:req.body});
res.send({result:"updated"})
})
app.delete('/:id', async(req,res)=>{
    let data = await getData();
    const result = await data.deleteOne({_id:new mongoDb.ObjectId(req.params.id)})
     res.send(result)
})
app.listen(4500)