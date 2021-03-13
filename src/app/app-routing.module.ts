import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ResetComponent } from './reset/reset.component';
import { SignupComponent } from './signup/signup.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'reset',component:ResetComponent},
  {path:'resetpassword',component:ResetpasswordComponent},

  // {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents=[LoginComponent,SignupComponent,ResetComponent,ResetpasswordComponent]