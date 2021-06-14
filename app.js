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
    res.status(200).render('index.pug',params);
});
//start the server 
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});