import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    ErrorPageComponent,
    BlankPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],

  exports: [LoginComponent, RegisterComponent, ForgetPasswordComponent, ErrorPageComponent, BlankPageComponent
  ]
})
export class PagesModule { }
