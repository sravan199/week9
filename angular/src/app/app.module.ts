import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { RegisterComponent } from './register/register.component'

import {LoginService} from './services/login.service';
import {IsAuthenticatedService}from './services/is-authenticated.service';
import { AuthGuard } from './auth.guard';
import { FliterPipe } from './fliter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ErrorComponent,
    RegisterComponent,
    FliterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [LoginService,IsAuthenticatedService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
