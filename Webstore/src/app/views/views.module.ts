import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
	
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { ShippingComponent } from './pages/shipping/shipping.component';
import { BillingComponent } from './pages/billing/billing.component';
import { AddpaymentComponent } from './pages/addpayment/addpayment.component';
import { AccountdetailComponent } from './pages/accountdetail/accountdetail.component';



@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
    ShippingComponent,
    BillingComponent,
    AddpaymentComponent,
    AccountdetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    SignupComponent,
    LoginComponent,
    ShippingComponent,
    BillingComponent,
    AccountdetailComponent
  ]
})
export class ViewsModule { }
