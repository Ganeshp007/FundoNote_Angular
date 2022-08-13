import { Component, Input, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { IconsNoteComponent } from '../icons-note/icons-note.component';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {
 
  @Input() NoteList:any;
  
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

   notecard:boolean=false;
  openDialog() {
    this.dialog.open(IconsNoteComponent,{
      width: '45%',
      height: '30%',
    });
    this.notecard=true;
  }

}
