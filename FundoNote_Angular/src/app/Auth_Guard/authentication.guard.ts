import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthguardService } from '../Services/authguardService/authguard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  durationInSeconds=5;

  constructor(private Authguardservice: AuthguardService, private router: Router,private _snackbar:MatSnackBar) {}  
  canActivate(): boolean {  
    if (!this.Authguardservice.gettoken()) {  
        this.router.navigateByUrl("/login");  
        this._snackbar.open('Please Login First !!','',{
          duration: this.durationInSeconds * 400,
          panelClass:['errorSnackbar']
        });
    }  
    return this.Authguardservice.gettoken();  
  }
  
}
