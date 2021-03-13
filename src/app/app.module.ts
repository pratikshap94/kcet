import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule,routingcomponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResetComponent } from './reset/reset.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';

@NgModule({
  declarations: [
    AppComponent,
    routingcomponents,
    ResetpasswordComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
