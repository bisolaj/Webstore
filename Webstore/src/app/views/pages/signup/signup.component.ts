import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';
import { Account } from 'src/app/interfaces/Account';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signup: FormGroup;

  
  constructor(private formBuilder: FormBuilder, private aService: AccountService) { }

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

  signUp(nam: string, usName: string, pass: string, confirmPW: string, addr: string, pho: string, em: string) {
    //check if email is confirm
    //check is password is the same
    
      //check if password is the same
      if (pass === confirmPW) {
        //check if the username is taken
         if (this.aService.checkIfUserExists(usName)) {
           alert ("User name Already exists")
         }
         else {
           //you send entire oblect to the list
           let addThisName: Account = {
            name: nam,
            userName: usName,
            password: pass,
            address: addr,
            phoneno: pho,
            email: em
           }
           this.aService.addUser(addThisName);
         }

      } else {
        alert ("Password does not match")
      }
    
  }


  submitForm() {
    if (this.signup.invalid) {
      alert('You must enter all the required fields!');
    }
    else {
      alert('Your account was successfully created!');
      //console.log(this.signup.value);
      this.signup.reset();

    }
  }

}
