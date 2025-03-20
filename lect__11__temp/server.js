import express from 'express';
// import path from 'path';

const app = express();


// ✅ Set EJS as the view engine
app.set('view engine', 'ejs');



let products = [
    { title: 'iphone - 16', price: 45000 },
    { title: 'samsung s24', price: 50000 }
];

app.get("/", (req, res) => {
    let name = 'Ram'; 
    res.render('index', { name, products });  
});
const port = 3000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
