import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Language{
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  ForgetpasswordForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.ForgetpasswordForm = this.formBuilder.group({
        Password: ['', [Validators.required, Validators.minLength(8)]],
        ConfirmPassword: ['', Validators.required],
      });
  }
  // convenience getter for easy access to form fields
  get f() { return this.ForgetpasswordForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.ForgetpasswordForm.invalid) {
          return;
      }
      console.log(this.ForgetpasswordForm.value);
  }

  onReset() {
      this.submitted = false;
      this.ForgetpasswordForm.reset();
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
