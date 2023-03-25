import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  error: boolean = false;

  registerForm = new FormGroup({
    full_name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });

  validateParams() {
    let result = {
      error: false,
      msg: ""
    };

    if(this.registerForm.value.full_name!.length < 3) {
      result.error = true;
      result.msg = "Name cannot be empty!";
      return result;
    }
    else if(!this.registerForm.value.email?.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )) {
      result.error = true;
      result.msg = "Email is invalid!";
      return result;
    }
    else if(this.registerForm.value.password!.length < 8 || this.registerForm.value.password!.length > 12) {
      result.error = true;
      result.msg = "Password should be 8 - 12 characters.";
      return result;
    }
    // api call goes here

    return result;
  }

  onChange(event: any) {
    this.error = false;
  }

  onSubmit() {
    if(this.validateParams().error) {
      this.error = true;
      return this.validateParams().msg;
    }

    // api call goes here
    return true;
  }
}
