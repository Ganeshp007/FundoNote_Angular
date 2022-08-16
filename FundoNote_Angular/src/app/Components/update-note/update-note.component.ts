import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteService } from 'src/app/Services/noteService/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {

  notedata:any;
  updateNoteForm: FormGroup;
  submitted = false;
  durationInSeconds = 5;

  constructor(@Inject(MAT_DIALOG_DATA) public data:UpdateNoteComponent ,private formBuilder: FormBuilder, 
               private note: NoteService,private _snackbar:MatSnackBar) { }

  ngOnInit(): void {
    console.log(this.data);
    this.notedata=this.data;
    this.updateNoteForm = this.formBuilder.group({
      title: [''],
      description: ['']
  });
  }

     // convenience getter for easy access to form fields
     get f() { return this.updateNoteForm.controls; }

     onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (!this.updateNoteForm.valueChanges) {
          return;
      }
      console.log(this.updateNoteForm.value);
      let updatedata={
        Title: this.updateNoteForm.value.title,
        Description: this.updateNoteForm.value.description,
      }
      this.note.updateNote(updatedata).subscribe((response:any)=>{
        console.log(response)
        this._snackbar.open('Note Updated Sucessfully...','',{
         duration: this.durationInSeconds * 400,
       });
       this.onReload();
     }, (error: any) => {
       console.log(error);
      })
  }

 onReload(){
   location.reload();
 }

}




