var express=require("express");
var bodyParser=require("body-parser");
var mongoose=require("mongoose");
var route=require("./routes/route.js");

var app=express();


app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers","Content-Type");
    next();
})


mongoose.connect('mongodb://localhost:27017/questions');


mongoose.connection.on('connected',function(){
        console.log('conneted to database');
});

mongoose.connection.on('error',(err)=>{
    if(err){
    console.log("error in connecting database"+err);
    }

})

app.use(bodyParser.json({limit :'10mb'}));


app.use("/",route);


app.listen(3000,()=>{console.log("you are listening to port 3000")});