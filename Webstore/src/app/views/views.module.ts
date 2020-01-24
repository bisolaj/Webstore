import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
	
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';



@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    SignupComponent,
    LoginComponent
  ]
})
export class ViewsModule { }
