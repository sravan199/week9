var route=require("express").Router();
var registeration=require('../database/registrationdetails.js');

route.get('/totalRegistered',function(req,res){

    registeration.find(function(err,registeration){
        res.json(registeration);
        });

});


route.post('/login',function(req,res){

        var  email =  req.body.email;
          var  password=req.body.password;
    registeration.find(function(err,registeration){
      
        let index=registeration.findIndex(x=>(x.email===email&&x.password===password))
         
        if(index===-1){
           res.send({id:0,msg:"please register or entered details are wrong "});   
           }
            else {
                res.send({id:1,name:email,msg:"can login"});  
             }
        });
});


route.post('/register',function(req,res){

    let details=new registeration({

        email:req.body.email,
        password:req.body.password,
    });

        console.log("data from post reg "+req.body.email);
        registeration.find(function(err,registeration){
            if(err){
                console.log(err);
                res.json({error:err})
            }
            else{
               
            let index=registeration.findIndex(x=>(x.email==req.body.email))
            console.log(index);   
            if(index!=-1){
                console.log("inside iff ");
                  res.send({id:0,msg:'user exist'});
               }


         else{
                if(details.password===req.body.confirmPassword){
                    
                    // details.save(function(err,contact){
                    //   if(err){
                    //       console.log("error in saving "+err);
                    //     res.json({id:0,msg:'error'});
                    //   }
                    //   else{
                    //     console.log("success");
                    //     res.json({id:1,name:email,msg:'success'});
                    //   }
            
                    // });

                         details.save().then(function(){
                            console.log("success");
                              res.json({id:1,name:req.body.email,msg:'success'});
                        });
                }
                else {
                            res.json({id:0,msg:'password missmatch'});
                     } 
               }
            }
        });

});



route.all("*",function(req,res){
    res.send("404 error");
});


module.exports=route;
