const express = require('express');
const app = express(); 
const port = 3500;
const path = require('path');
const hbs = require('hbs');
require("./db/conn"); 
const registerUser= require('./models/register',)
const static_path = path.join(__dirname, '../Public');
const template_path = path.join(__dirname, '../Template/Views');
const partials_path = path.join(__dirname, "../Template/Partials");
hbs.registerPartials(partials_path)

app.set ('view engine', 'hbs');
app.set("views", template_path);


app.get('/', (req,res)=>{
   res.render('index')
})

app.get("/login", (req, res) => {
  res.render('login');
});
//4758027623  01-01-1999
app.get("/register", (req, res) => {
  res.render('register');
});












// server start
app.listen(port,()=>{
    console.log(`Server is Started at port ${port}`)
});

