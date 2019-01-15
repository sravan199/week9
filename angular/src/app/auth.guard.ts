import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import {Router } from '@angular/router';
import{IsAuthenticatedService}from './services/is-authenticated.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private isAuthenticated:IsAuthenticatedService,private router:Router){}
  canActivate():boolean
     { 
       if(this.isAuthenticated.canlogin)
          return true;
        else
        this.router.navigate(['/login']);

  }
}
