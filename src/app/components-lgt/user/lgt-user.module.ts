import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup/signup.component';
import { SignupFooterComponent } from './signup/signup-footer/signup-footer.component';
import { LoginComponent } from './login/login/login.component';
import { LoginFooterComponent } from './login/login-footer/login-footer.component';
import { LogoutComponent } from './logout/logout/logout.component';
import { LogoutFooterComponent } from './logout/logout-footer/logout-footer.component';
import { CookiesComponent } from './cookies/cookies/cookies.component';
import { CookiesFooterComponent } from './cookies/cookies-footer/cookies-footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SignupComponent, 
    SignupFooterComponent, 
    LoginComponent, 
    LoginFooterComponent, 
    LogoutComponent, 
    LogoutFooterComponent, 
    CookiesComponent, 
    CookiesFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "/signup", component: SignupComponent },
      { path: "/login", component: LoginComponent },
      { path: "/logout", component: LogoutComponent },
      { path: "/cookies", component: CookiesComponent }
    ])
  ],
  exports: [
    SignupComponent, 
    SignupFooterComponent, 
    LoginComponent, 
    LoginFooterComponent, 
    LogoutComponent, 
    LogoutFooterComponent, 
    CookiesComponent, 
    CookiesFooterComponent
  ]
})
export class LgtUserModule { }
