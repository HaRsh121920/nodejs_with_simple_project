import express from 'express'
import path from 'path'

const app =express();

app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.render('index.ejs')
})
app.post('/form-sumbit',(req,res)=>{
    console.log(req.body)
    res.json({
        message: 'your form has been sumbitted',
        success:true
    })
})
const port = 1000;

app.listen(port,()=>console.log('server is runnng '))
