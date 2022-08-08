import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  token:any;
  constructor(private httpService: HttpService) { 
    this.token=localStorage.getItem("token");
  }

  registration(reqdata: any)
  {
    console.log(reqdata);

    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json'
      })
    }

    return this.httpService.postservice('/User/AddUser',reqdata,false,header)
  }

  login(reqdata: any)
  {
    console.log(reqdata);

    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json'
      })
    }

    return this.httpService.postservice('/User/LoginUser',reqdata,false,header)
  }

  FindEmail(reqdata: any)
  {
    console.log(reqdata);

    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json'
      })
    }

    return this.httpService.postservice('/User/ForgetPassword/'+reqdata.Email,reqdata,false,header)
  }
}
