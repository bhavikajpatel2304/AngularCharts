import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-udit',
  templateUrl: './udit.component.html',
  styleUrls: ['./udit.component.css']
})
export class UditComponent {

  @Input() email: string = "";
  @Input() password: string = "";
  error: boolean = false;

  validateParams() {
    let result = {
      error: false,
      msg: ""
    };

    if(!this.email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )) {
      result.error = true;
      result.msg = "Email is invalid!";
      return result;
    }
    else if(this.password.length < 8 || this.password.length > 12) {
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
