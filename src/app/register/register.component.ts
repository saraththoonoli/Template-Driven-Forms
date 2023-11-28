import { Component } from '@angular/core';
import { from } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  // details twoway binding 

  user = {
    username: '',
    email: '',
    password: '',
    dob: '',
    phone: '',
    address: '',

  };


  // submit the form
  onSubmit() {

    console.log('Form submitted:', this.user);

    this.user = {
      username: '',
      email: '',
      password: '',
      dob: '',
      phone: '',
      address: ''
    };
    // alert for submission
    alert('submitted successfully....')

  }
}
