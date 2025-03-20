import express from 'express'
import path from 'path' 

const app = express();
// const products= [
//     {title:'iphone - 15', price: 75000},
//     {title:'iphone - 16', price: 100000},
//     {title:'iphone - 19', price: 200000},
//     {title:'macbook pro ', price: 750000},
// ]
// send response 
app.get('/',(req,res)=>{
    //  res.json({message:'fetch all products',
    //     jo_change: 'de skte hai ',
    //     products : products,
    //     success: true 
    //  });
     
     const dir = path.resolve();
    //  console.log("my path = ", dir);
     const url = path.join(dir, `./index.html`)
     console.log("full path =",url)
     res.sendFile(url);
});



const port = 1000;

app.listen(port, ()=>console.log(`server is running on port ${port}`))



