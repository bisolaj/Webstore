import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-accountdetail',
  templateUrl: './accountdetail.component.html',
  styleUrls: ['./accountdetail.component.scss']
})
export class AccountdetailComponent implements OnInit {
  accountdetail: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  get name() { return this.accountdetail.get('name'); }
  get uname() { return this.accountdetail.get('uname'); }
  get password() { return this.accountdetail.get('password'); }
  get npassword() { return this.accountdetail.get('npassword'); }
  get cnpassword() { return this.accountdetail.get('cnpassword'); }
  get email() { return this.accountdetail.get('email'); }


  ngOnInit() {
    this.accountdetail = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      uname: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      npassword: ['', [Validators.required, Validators.minLength(9)]],
      cnpassword: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.minLength(5)]],
      hasEmail: false,
    });
    this.accountdetail.get('hasEmail').valueChanges.subscribe(value => {
      if (value) {
        this.email.clearValidators()
      }
      else {
        this.email.setValidators(Validators.required);
      }
      this.email.updateValueAndValidity();
    });
  }
  submitForm() {
    if (this.accountdetail.invalid) {
      alert('You must entered all required information!');
    }
    else {
      alert('Successful');
      console.log(this.accountdetail.value);
      this.accountdetail.reset();

    }
  }

}
