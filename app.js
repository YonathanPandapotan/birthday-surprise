const path = require('path');
const express = require('express');
const hbs = require('hbs');
const app = express();

const PORT = process.env.PORT || 5000

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static('public'));
app.get('/', (req,res) =>{
    res.render('index');
});

app.listen(PORT, ()=>{
    console.log('App is up on port ${PORT}');
});