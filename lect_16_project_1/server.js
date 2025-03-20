import express from "express"
import mongoose from "mongoose"
const app = express();


mongoose.connect("mongodb+srv://harshdidwana2004:fvZ8fpkdPUXdcEob@cluster0.evrnz.mongodb.net/",
    {dbName:"mongodb",}
).then(() =>console.log("mongodb connected"))
 .catch((err) =>console.log(err));

app.get("/", (req,res)=>{
    res.render("index.ejs")
})

app.post('/form',(req,res)                                  )
const port = 1000;
app.listen(port,()=>console.log("server is running "))