import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {
  billing: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }

  get name() { return this.billing.get('name'); }
  get city() { return this.billing.get('city'); }
  get zipcode() { return this.billing.get('zipcode'); }
  get state() { return this.billing.get('state'); }
  get address() { return this.billing.get('address'); }
  get phoneno() { return this.billing.get('phoneno'); }
  get email() { return this.billing.get('email'); }

  ngOnInit() {
    this.billing = this.formBuilder.group({
      name: ['', Validators.required],
      city: ['', [Validators.required, Validators.minLength(3)]],
      zipcode: ['', Validators.required],
      state: ['', Validators.required],
      address: ['', Validators.required],
      phoneno: ['', Validators.required],
      email: ['', Validators.required],
      hasEmail: false,
    });
    this.billing.get('hasEmail').valueChanges.subscribe(value => {
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
    if (this.billing.invalid) {
      alert('You must entered all required information!');
    }
    else {
      alert('Successful');
      console.log(this.billing.value);
      this.billing.reset();

    }
  }

}