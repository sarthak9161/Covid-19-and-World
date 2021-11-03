//server 
const express=require("express");
const port=8000;
const app=express();
const bodyParser=require('body-parser');
const path=require('path');
let Ejs=require('ejs');

//express
app.use('/static',express.static('static'));
app.use(express.urlencoded());

app.set('view engine','html')
app.engine('html',require('ejs').renderFile);

//end points
app.get('/',(req,res)=>{
    const params={}
    res.status(200).render('home.html',params);
})
app.get('/prevention',(req,res)=>{
    const params={}
    res.status(200).render('prevention.html',params);
})



app.get('/Check Slots',(req,res)=>{
    const params={}
    res.status(200).render('slots.html',params);
})
app.get('/covid tracker',(req,res)=>{
    const params={}
    res.status(200).render('covid_tracker.html',params);
})
app.get('/Stay Happy',(req,res)=>{
    const params={}
    res.status(200).render('stayhappy.html',params);
})

//start the server
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});







