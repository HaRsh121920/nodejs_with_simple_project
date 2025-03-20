import express from "express"

const app = express();

// c = create=>post (method)
// r = read=> get(method)
// u = update = put(method)
// d = delete = delete(method)

app.get('/g',(req,res) =>{
    res.send("this is response")
})
app.post('/p',(req,res) =>{
    res.send("this is response")
})
const port = 3000;
app.listen(port,()=>console.log(`server is running on port ${port}`))