import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path:'',redirectTo:"/login",pathMatch:'full'},
  {path:"login",component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'home/:name',component:HomeComponent,canActivate:[AuthGuard]},
  {path:"error",component:ErrorComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
