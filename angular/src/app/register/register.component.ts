import { Component, OnInit } from '@angular/core';

import {Router }from '@angular/router';
import {LoginService} from '../services/login.service'
import {IsAuthenticatedService}from '../services/is-authenticated.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email:any;
  password:any;
  confirmPassword:any;
  receivedData:any;
  data={
    email:'',
    password:'',
    confirmPassword:''
  }
  
  constructor(private router:Router,private loginService:LoginService,private isAuthenticated:IsAuthenticatedService) { }

  ngOnInit() {
  }

  registerApi(){

    this.data.email=this.email;
    this.data.password=this.password;
    this.data.confirmPassword=this.confirmPassword;
    console.log('data to be sent ' + this.confirmPassword + '    '+this.password);
    
    this.loginService.apiLogin('http://localhost:5000/register',this.data).subscribe((res:any)=>{
          this. receivedData= res;
          console.log("data received from localhost 5000");
          console.log(this.receivedData);
          if(this.receivedData.id==1){
          this.isAuthenticated.canlogin=true;
          this.router.navigate(['/home',this.receivedData.name]);  
        }
          else{
            this.isAuthenticated.canlogin=false;
            alert("confrim password and password mismatch or user already exist ");
          }
      }); 
  }

  onclick(){
   this.router.navigate(['/login']);
  }

}
