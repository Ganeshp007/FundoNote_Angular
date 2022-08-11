import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { EmailExistsComponent } from './Components/email-exists/email-exists.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { GetallNoteComponent } from './Components/getall-note/getall-note.component';
import { CreateNoteComponent } from './Components/create-note/create-note.component';
import { DisplayNoteComponent } from './Components/display-note/display-note.component';


const routes: Routes = [
  {path:"register", component:RegistrationComponent},
  {path:"login",component:LoginComponent},
  {path:"resetpassword",component:ResetPasswordComponent},
  {path:"emailexists", component:EmailExistsComponent},
  {path:"dashboard",component:DashboardComponent,
  children:[
    {path:"",redirectTo:"/dashboard/getall-note",pathMatch:'full'},
    {path:"getall-note",component:GetallNoteComponent}
  ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
