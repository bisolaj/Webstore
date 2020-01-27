import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './views/pages/signup/signup.component';
import { HomeComponent } from './views/pages/home/home.component';
import { AboutusComponent } from './views/pages/aboutus/aboutus.component';
import { LoginComponent } from './views/pages/login/login.component';
import { ShopComponent } from './views/pages/shop/shop.component';
import { ContactComponent } from './views/pages/contact/contact.component';
import { MyaccountComponent } from './views/pages/myaccount/myaccount.component';
import { OrdersComponent } from './views/pages/orders/orders.component';
import { AddressComponent } from './views/pages/address/address.component';
import { PaymentComponent } from './views/pages/payment/payment.component';
import { AccountdetailComponent } from './views/pages/accountdetail/accountdetail.component';
import { BillingComponent } from './views/pages/billing/billing.component'; import { ShippingComponent } from './views/pages/shipping/shipping.component';
import { FaqsComponent } from './views/pages/faqs/faqs.component';
import { PageNotFoundComponent } from './views/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'myaccount', component: MyaccountComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'address', component: AddressComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'accountdetail', component: AccountdetailComponent },
  { path: 'billing', component: BillingComponent },
 { path: 'shipping', component: ShippingComponent },
  {
    path: 'faqs',
    component: FaqsComponent,
    data: { title: 'Heroes List' }
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
