import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icons-note',
  templateUrl: './icons-note.component.html',
  styleUrls: ['./icons-note.component.scss']
})
export class IconsNoteComponent implements OnInit {
  notecard: boolean=false;
  // @Input() Notecard:any;

  constructor() { }

  ngOnInit(): void {
  }
  
}
