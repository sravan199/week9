import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  
 apiLogin(ApiUrl:string,data){
  return this.http.post(ApiUrl,data);
 };

 
 apipostdata(ApiUrl:string,data){
  return this.http.post(ApiUrl,data);
 };


 apigetdata(ApiURL:string){
   return this.http.get(ApiURL);
 };


}
