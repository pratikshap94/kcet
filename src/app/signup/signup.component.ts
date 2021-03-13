import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  public loginForm = this.fb.group({
    email: ['john.sam@gmail.com', [Validators.required,
    Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],
    password: ['********', Validators.required]
    });


 isValidInput(fieldName): boolean {
  return this.loginForm.controls[fieldName].invalid &&
    (this.loginForm.controls[fieldName].dirty || this.loginForm.controls[fieldName].touched);
}
login(): void {
  console.log(this.loginForm.value);
}



}
