import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  public loginForm = this.fb.group({
    email: ['john.sam@gmail.com', [Validators.required,
    Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],
    password: ['********', Validators.required],
    re_enterpassword: ['********', Validators.required]
    });


 
login(): void {
  console.log(this.loginForm.value);
}

}
