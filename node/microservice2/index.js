var express=require("express");
var bodyParser= require("body-parser");
var mongoose=require("mongoose");

var app=express();

var route=require('./routes/route.js');


mongoose.connect('mongodb://localhost:27017/logindetails');


mongoose.connection.on('connected',function(){
        console.log('conneted to database');
});

mongoose.connection.on('error',(err)=>{
    if(err){
    console.log("error in connecting database"+err);
    }

})

 app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers","Content-Type");
    next();
})


app.use(bodyParser.json());


app.use('/',route);

// app.get('/',function(req,res){
//     res.send("yo brohh");
// });

app.all('*',function(req,res){

    res.send("404 error");
});


app.listen(5000,function(){
    console.log("port 5000 started");
});