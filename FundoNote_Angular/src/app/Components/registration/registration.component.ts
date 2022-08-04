import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

    constructor(private formBuilder: FormBuilder) { }

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

    }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
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
