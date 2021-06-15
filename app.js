const express = require("express");
const path = require("path");
const app = express();
const port = 9000;

//express
app.use('/static', express.static('static'));
app.use(express.urlencoded());
//pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname,'views'));
//end points
app.get('/',(req,res)=>{
    const params = {}
    res.status(200).render('home.pug',params);
});
app.get('/menu',(req,res)=>{
    const params = {}
    res.status(200).render('menu.pug',params);
});
app.get('/photos',(req,res)=>{
    const params = {}
    res.status(200).render('photos.pug',params);
});
app.get('/review',(req,res)=>{
    const params = {}
    res.status(200).render('review.pug',params);
});
app.get('/contact',(req,res)=>{
    const params = {}
    res.status(200).render('contact.pug',params);
});
//start the server 
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});