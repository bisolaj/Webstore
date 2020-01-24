import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signup: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  get name() { return this.signup.get('name'); }
  get uName() { return this.signup.get('uName'); }
  get password() { return this.signup.get('password'); }
  get rpassword() { return this.signup.get('rpassword'); }
  get address() { return this.signup.get('address'); }
  get phoneno() { return this.signup.get('phoneno'); }
  get email() { return this.signup.get('email'); }
  ngOnInit() {

    // // this.userForm = new FormGroup({
    // //   fName: new FormControl('', Validators.required),
    // //   lName: new FormControl('',[Validators.required,Validators.minLength(3)]),
    // //   mName: new FormControl('',Validators.required),
    // //   hasMiddleName: new FormControl(false)
    // });

    this.signup = this.formBuilder.group({
      name: ['', Validators.required],
      uName: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', Validators.required],
      rpassword: ['', Validators.required],
      address: ['', Validators.required],
      phoneno: ['', Validators.required],
      email: ['', Validators.required],
      hasEmail: false,
    });
    this.signup.get('hasEmail').valueChanges.subscribe(value => {
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
    if (this.signup.invalid) {
      alert('Hey fix your errors!');
    }
    else {
      alert('Successful');
      console.log(this.signup.value);
      this.signup.reset();

    }
  }

}
