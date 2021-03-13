import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  slider_img1:string="assets/images/img1.jpg";
  slider_img2:string="assets/images/img2.jpeg";
  slider_img3:string="assets/images/img3.jpg";
  slider_img4:string="assets/images/img4.jpg";
  slider_img5:string="assets/images/img5.jpg"; 
   logo:string="assets/images/kalpas_logo.jpg";

  constructor(private fb: FormBuilder) {}

  

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
