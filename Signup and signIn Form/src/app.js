const express = require('express');
const app = express(); 
const port = 3500;
const path = require('path');

require('./db/conn'); 
app.set ('view engine', 'hbs');

app.get('/', (req, res) => {
   res.render('index', path.join(__dirname, 'Views'))
})












// server start
app.listen(port,()=>{
    console.log(`Server is Started at port ${port}`)
});

