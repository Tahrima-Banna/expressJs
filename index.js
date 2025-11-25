
const express = require('express');
const app =express();
const port =5000;

app.get('/',(req,res)=>{
    res.send('hello my first server');
})

app.listen(port,()=>{
    console.log(`My First server is running on port:${port}`)
})