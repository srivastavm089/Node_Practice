const express = require('express');
const EventEitter = require('events');
const app = express();
const event = new EventEitter();
let count = 0; 
event.on('CountAPI', ()=>{
    count++
    console.log("event called"+count)
})
app.get('/', (req,res)=>{
    res.send("api called");
    event.emit("CountAPI");

})
app.get('/search', (req,res)=>{
    res.send("search called");
})
app.get('/update', (req,res)=>{
    res.send("update api called");
})
app.listen(5000)