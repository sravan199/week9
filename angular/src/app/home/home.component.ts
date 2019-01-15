import { Component, OnInit } from '@angular/core';

import {ActivatedRoute,Router, ParamMap} from '@angular/router'

import {  LoginService  } from '../services/login.service'
import {IsAuthenticatedService}from '../services/is-authenticated.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  value:any=false;
  search:any="";
  sendAnswer="";
  name:any="";
  AnswerData={
    typeofQuestion:'',
    name:'',
    answer:''
  };
  question:any="";
  typeofQuestion:any="";
questionData={
name:'',
question:'',
typeofQuestion:""
};



  constructor(private router:Router,private  loginService:LoginService,private activatedRoute:ActivatedRoute,private isAuthentcated:IsAuthenticatedService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
           this.name =(params.get("name"));
           console.log(this.name);

       });
       
       this.loginService.apigetdata('http://localhost:3000/all').subscribe((res:any)=>{
        this. value= res;
        console.log(this.value);
    });


  }

  AskaQuestion(){
    this.questionData.question=this.question;
    this.questionData.name=this.name;
    this.questionData.typeofQuestion=this.typeofQuestion;
    console.log("  asked question ");
     console.log(this.questionData)
        this.loginService.apipostdata('http://localhost:3000/question',this.questionData).subscribe((res:any)=>{
                this.loginService.apigetdata('http://localhost:3000/all').subscribe((res:any)=>{
                  this.question="";
                  this.typeofQuestion="";
                     this. value= res;
                  });
              }); 
    };



  submitAnswer(question){
    this.AnswerData.typeofQuestion=question.typeofQuestion
    this.AnswerData.name=this.name
    this.AnswerData.answer=this.sendAnswer
    console.log("submitted answer " );
    console.log(this .AnswerData);
    
        this.loginService.apipostdata('http://localhost:3000/answer',this.AnswerData).subscribe((res:any)=>{
                this.loginService.apigetdata('http://localhost:3000/all').subscribe((res:any)=>{
                  this.sendAnswer="";
                     this. value= res;
                  });
              });
       
    };



logout(){
this.isAuthentcated.canlogin=false;
this.router.navigate(['/login']);
}




}