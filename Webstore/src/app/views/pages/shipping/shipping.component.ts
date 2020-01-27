import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {
  shipping: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }

  get name() { return this.shipping.get('name'); }
  get city() { return this.shipping.get('city'); }
  get zipcode() { return this.shipping.get('zipcode'); }
  get state() { return this.shipping.get('state'); }
  get address() { return this.shipping.get('address'); }
  get phoneno() { return this.shipping.get('phoneno'); }
  get email() { return this.shipping.get('email'); }

  ngOnInit() {
    this.shipping = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      city: ['', [Validators.required, Validators.minLength(3)]],
      zipcode: ['', [Validators.required, Validators.minLength(3)]],
      state: ['', Validators.required],
      address: ['', [Validators.required, Validators.minLength(9)]],
      phoneno: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.minLength(5)]],
      hasEmail: false,
    });
    this.shipping.get('hasEmail').valueChanges.subscribe(value => {
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
    if (this.shipping.invalid) {
      alert('You must entered all required information!');
    }
    else {
      alert('Successful');
      console.log(this.shipping.value);
      this.shipping.reset();

    }
  }

}