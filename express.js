const express = require('express');
const app = express();
app.get("/about", (req,res)=>{
    res.send("welcome to about page")
});

app.listen(4500);