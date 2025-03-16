import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient, private _route: Router) { }

  OnSignup(NewUser:any) {
    return this._http.post('https://67d5f9cd286fdac89bc0e100.mockapi.io/Registration', NewUser)

  }

  OnLogin(data: any) {
    return this._http.get<any[]>('https://67d5f9cd286fdac89bc0e100.mockapi.io/Registration').subscribe(users => {
      const user = users.find(u => u.email === data.email && u.password === data.password);
      if (user) {
        alert('Login Successful');
        this._route.navigate(['/Home'])

      }
      else
        alert('Login Failed');
    });
  }



}
