import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logo:string="assets/images/kalpas_logo.jpg";

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  loginForm = this.fb.group({
    email: ['john.sam@gmail.com', [Validators.required,
    Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],
    password: ['********', Validators.required]
    });

    isShow = false;
 
    onclick() {
      this.isShow = !this.isShow;
    }
login(): void {
  console.log(this.loginForm.value);
}

}
