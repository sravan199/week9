var router=require("express").Router();

var Questions=require('../database/questions.js');




router.get('/all',function(req,res){

    Questions.find(function(err,Ques){
        console.log(Ques);
        res.json(Ques);
        });
       
})


router.post('/question',function(req,res){
    // console.log(req.body);

    let details=new Questions({
        question:req.body.question,
        name:req.body.name,
        typeofQuestion:req.body.typeofQuestion
    });

   details.save().then(function(){
    Questions.find(function(err,Ques){
        console.log(Ques);
        res.json(Ques);
        });
       
   });

});


router.post('/answer',function(req,res){


Questions.findOne({typeofQuestion:req.body.typeofQuestion}).then(function(record){

    record.answers.push({ name:req.body.name, answer:req.body.answer});
    record.save().then(function(){

        Questions.find(function(err,Ques){
        console.log(Ques);
        res.json(Ques);
        });

    });

});




});


router.all("*",function(req,res){
    res.send("404 error");
});

 module.exports=router;