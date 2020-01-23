import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/pages/header/header.component';
import { MainComponent } from './views/pages/main/main.component';
import { FooterComponent } from './views/pages/footer/footer.component';
import { HomeComponent } from './views/pages/home/home.component';
import { AboutusComponent } from './views/pages/aboutus/aboutus.component';
import { FaqsComponent } from './views/pages/faqs/faqs.component';
import { PageNotFoundComponent } from './views/pages/page-not-found/page-not-found.component';
import { SignupComponent } from './views/pages/signup/signup.component';
import { LoginComponent } from './views/pages/login/login.component';
import { ShopComponent } from './views/pages/shop/shop.component';
import { ContactComponent } from './views/pages/contact/contact.component';
import { MyaccountComponent } from './views/pages/myaccount/myaccount.component';
import { OrdersComponent } from './views/pages/orders/orders.component';
import { PaymentComponent } from './views/pages/payment/payment.component';
import { AddressComponent } from './views/pages/address/address.component';
import { AccountdetailComponent } from './views/pages/accountdetail/accountdetail.component';
import { BillingComponent } from './views/pages/billing/billing.component';
import { ShippingComponent } from './views/pages/shipping/shipping.component';
import { CheckoutComponent } from './views/pages/checkout/checkout.component';

const appRoutes: Routes = [
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
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    HomeComponent,
    AboutusComponent,
    FaqsComponent,
    PageNotFoundComponent,
    SignupComponent,
    LoginComponent,
    ShopComponent,
    ContactComponent,
    MyaccountComponent,
    OrdersComponent,
    PaymentComponent,
    AddressComponent,
    AccountdetailComponent,
    BillingComponent,
    ShippingComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
