import express from "express"
import mongoose from 'mongoose';
const app = express();
mongoose.connect("mongodb+srv://harshdidwana2004:KHjHgJLCrT8kqCrK@cluster0.usdc1.mongodb.net/",{dbName:"node js masstery course "}).then(()=>console.log("mongodb connected..")).catch((err)=> console.log(err));
const port = 1000;
app.listen(port,()=>console.log(`server is running on port ${port}`))
