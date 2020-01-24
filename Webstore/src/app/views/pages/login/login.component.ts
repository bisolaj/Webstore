import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }
 
  get uName() { return this.login.get('uName'); }
  get password() { return this.login.get('password'); }
 
  ngOnInit() {
    this.login = this.formBuilder.group({
      uName: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', Validators.required],
   });
  }

  submitForm() {
    if (this.login.invalid) {
      alert('You must enter all the required data!');
    }
    else {
      alert('Successful');
      console.log(this.login.value);
      this.login.reset();

    }
  }

}
