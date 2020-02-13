import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-addpayment',
  templateUrl: './addpayment.component.html',
  styleUrls: ['./addpayment.component.scss']
})
export class AddpaymentComponent implements OnInit {
  addpayment: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addpayment = this.formBuilder.group({
      cnumber: ['', Validators.required],
      ccode: ['', [Validators.required, Validators.minLength(3)]],
      edate: ['', Validators.required],
      
    });
    
  }

  submitForm() {
    if (this.addpayment.invalid) {
      alert('You must entered all required information!');
    }
    else {
      alert('Successful');
      console.log(this.addpayment.value);
      this.addpayment.reset();

    }
  }


}
