// console.log("starting with expres.js")

import express from 'express'

const app = express();

app.get('/',(req,res)=>{
    res.send("you are best")
})

app.get('/srk',(req,res)=>{
    res.send("you are one of the best")
})
const port = 3000;

app.listen(port,()=> console.log(`server is running on port ${port}`))

