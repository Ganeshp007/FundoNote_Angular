import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { EmailExistsComponent } from './Components/email-exists/email-exists.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';

const routes: Routes = [
  {path:"register", component:RegistrationComponent},
  {path:"login",component:LoginComponent},
  {path:"resetpassword",component:ResetPasswordComponent},
  {path:"emailexists", component:EmailExistsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
