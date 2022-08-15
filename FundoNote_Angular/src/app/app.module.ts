import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';

import { AuthguardService } from './Services/authguardService/authguard.service';


import { AppComponent } from './app.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { LoginComponent } from './Components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmailExistsComponent } from './Components/email-exists/email-exists.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { CreateNoteComponent } from './Components/create-note/create-note.component';
import { GetallNoteComponent } from './Components/getall-note/getall-note.component';
import { DisplayNoteComponent } from './Components/display-note/display-note.component';
import { IconsNoteComponent } from './Components/icons-note/icons-note.component';
import { UpdateNoteComponent } from './Components/update-note/update-note.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    EmailExistsComponent,
    ResetPasswordComponent,
    DashboardComponent,
    CreateNoteComponent,
    GetallNoteComponent,
    DisplayNoteComponent,
    IconsNoteComponent,
    UpdateNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    HttpClientModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatExpansionModule,
    MatTooltipModule,
    MatMenuModule,
    MatDialogModule,
    MatGridListModule
  ],
  providers: [AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
