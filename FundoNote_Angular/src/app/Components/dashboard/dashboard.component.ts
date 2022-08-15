import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  selectedMenu:any='Notes';
  durationInSeconds=5;

  constructor(private router:Router,private _snackbar: MatSnackBar) { }

  ngOnInit(): void {
  }

  goTo(paramText:string){
    this.selectedMenu = paramText;
  } 

  onReminder(){
    this.router.navigateByUrl('/login');
  }
}