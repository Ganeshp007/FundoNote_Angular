import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userService/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';


interface Language{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-email-exists',
  templateUrl: './email-exists.component.html',
  styleUrls: ['./email-exists.component.scss']
})
export class EmailExistsComponent implements OnInit {
  EmailExistsForm!: FormGroup;
  submitted = false;
  durationInSeconds = 5;

  constructor(private formBuilder: FormBuilder , private user: UserService,private _snackbar:MatSnackBar) { }

  ngOnInit() {
      this.EmailExistsForm = this.formBuilder.group({
        Email: ['', [Validators.required, Validators.email]]
      });
  }
  // convenience getter for easy access to form fields
  get f() { return this.EmailExistsForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.EmailExistsForm.invalid) {
          return;
      }
      console.log(this.EmailExistsForm.value);

      console.log(this.EmailExistsForm.value);
        let reqdata={
          Email: this.EmailExistsForm.value.Email
        }

        this.user.FindEmail(reqdata).subscribe((response:any)=>{
          console.log(response);
          this._snackbar.open('Reset Password Link Sent Sucessfully...','',{
            duration: this.durationInSeconds * 400,
            verticalPosition: 'top',
            horizontalPosition: 'center',
          });
        }, (error: any) => {
          console.log(error);
        })
  }

  onReset() {
      this.submitted = false;
      this.EmailExistsForm.reset();
  }

  selectedValue!: string;
  selectedCar!: string;
  Language: Language[] = [
    {value: 'English (United States)-0', viewValue: 'English (United States)'},
    {value: 'English (United Kingdom)-1', viewValue: 'English (United Kingdom)'},
    {value: 'Hindi-2', viewValue: 'Hindi'},
  ];
  selectedLang = this.Language[0].value;
}
