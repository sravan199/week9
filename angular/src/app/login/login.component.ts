import { Component, OnInit } from '@angular/core';

import {LoginService} from '../services/login.service'
import {IsAuthenticatedService}from '../services/is-authenticated.service';


import {Router }from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 email:any;
 password:any;
 receivedData:any;
 done:true;
 data={
   email:'',
   password:''
 }

  constructor(private router:Router,private loginService:LoginService,private isAuthenticated:IsAuthenticatedService) { }

  ngOnInit() {

  }

  callService(){
    this.data.email=this.email;
    this.data.password=this.password
    
    this.loginService.apiLogin('http://localhost:5000/login',this.data).subscribe((res:any)=>{
          this. receivedData= res;
          console.log("data received from localhost 3000");
          console.log(this.receivedData);
          if(this.receivedData.id==1){
          this.isAuthenticated.canlogin=true;
          this.router.navigate(['/home',this.receivedData.name]);  
        }
          else{
            this.isAuthenticated.canlogin=false;
            alert("entered details are wrong ");
          }
      }); 

  }

onclick(){
this.router.navigate(['/register']);
}


}
