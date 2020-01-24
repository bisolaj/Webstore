import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
	
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './pages/signup/signup.component';



@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    SignupComponent
  ]
})
export class ViewsModule { }
