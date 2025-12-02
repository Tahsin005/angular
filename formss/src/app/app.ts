import { NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, FormsModule, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // name = new FormControl('tahsin');
  // password = new FormControl();

  // displayValue() {
  //   console.log(this.name.value);
  //   console.log(this.password.value);
  // }

  // form group
  // profileForm = new FormGroup({
  //   name: new FormControl('', [Validators.required]),
  //   password: new FormControl('', [Validators.minLength(5), Validators.required]),
  //   email: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])
  // });

  // onSubmit() {
  //   console.log(this.profileForm.value)
  // }

  // get name() {
  //   return this.profileForm.get('name');
  // }

  // get password() {
  //   return this.profileForm.get('password');
  // }

  // get email() {
  //   return this.profileForm.get('email');
  // }

  

  // template driven form

  userDetails:any = {};
  addDetails(val:NgForm) {
    console.log(val);
    this.userDetails = val;
    console.log(this.userDetails);
  }
}
