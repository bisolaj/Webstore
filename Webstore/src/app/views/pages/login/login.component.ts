import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private dService: AccountService) { }
 
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
      this.login.reset();
    }
  }

  logIn(userName: string, password: string) {
    //we are going to compare password stored in our service
    if(this.dService.checkDetail(userName,password)) {
      this.login.reset();
      alert('Your Logged in');
    } else {
      this.login.reset();
      alert('Please try again');
    }
  }

}
