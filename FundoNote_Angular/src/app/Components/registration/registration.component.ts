import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userService/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';

interface Language{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit {

    registerForm!: FormGroup;
    submitted = false;
    hide: boolean = true;
    durationInSeconds = 5;

    constructor(private formBuilder: FormBuilder, private user: UserService,private _snackbar:MatSnackBar) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            FirstName: ['', Validators.required],
            LastName: ['', Validators.required],
            Email: ['', [Validators.required, Validators.email]],
            Password: ['', [Validators.required, Validators.minLength(8)]],
            ConfirmPassword: ['', Validators.required],
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        console.log(this.registerForm.value);
        let reqdata={
          Firstname: this.registerForm.value.FirstName,
          Lastname: this.registerForm.value.LastName,
          Email: this.registerForm.value.Email,
          Password: this.registerForm.value.Password,
        }

        this.user.registration(reqdata).subscribe((response:any)=>{
          console.log(response)
          this._snackbar.open('Registration Sucessfull...','',{
            duration: this.durationInSeconds * 800,
            verticalPosition: 'top',
            horizontalPosition: 'center',
          });
        }, (error: any) => {
          console.log(error);
        })
    }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }

    ShowPassword() {
      this.hide = !this.hide;
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
