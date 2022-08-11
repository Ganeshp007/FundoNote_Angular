import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/noteService/note.service';

@Component({
  selector: 'app-getall-note',
  templateUrl: './getall-note.component.html',
  styleUrls: ['./getall-note.component.scss']
})
export class GetallNoteComponent implements OnInit {

  notesArray:any;
  notesData:any;

  message:any;
  public suscription:any;

  constructor(private noteService: NoteService) { }

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
    }, (error: any) => {
      console.log(error);
    })
  }
}
