import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NoteService } from 'src/app/Services/noteService/note.service';

@Component({
  selector: 'app-getall-note',
  templateUrl: './getall-note.component.html',
  styleUrls: ['./getall-note.component.scss']
})
export class GetallNoteComponent implements OnInit {

  notesArray:any;
  notesData:any;
  durationInSeconds = 5;

  message:any;
  public suscription:any;
  constructor(private noteService: NoteService,private _snackbar: MatSnackBar,private router: Router) { }

  ngOnInit(): void {  
   this.getallNotes();
  }
  
  getallNotes()
  {
    this.noteService.getallNote().subscribe((request:any) => {
      console.log("request data",request);
      this.notesArray=request.data;
      this.notesArray.reverse();
      console.log("Note Array",this.notesArray);
    }, 
    
    (error: any) => {
      console.log(error);
      this._snackbar.open('User Session Expired !!  Please Relogin...','',{
        duration: this.durationInSeconds * 400,
        panelClass:['errorSnackbar']
      });
      this.router.navigateByUrl('/login');
    })

  }
}
