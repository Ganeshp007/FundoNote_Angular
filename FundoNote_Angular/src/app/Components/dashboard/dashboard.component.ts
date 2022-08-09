import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  searchTerm : String ="";
  selectedMenu:any='Notes';


  constructor() { }

  ngOnInit(): void {
  }

  goTo(paramText:string){
    this.selectedMenu = paramText;
  }

}
