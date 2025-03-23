import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


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
        sessionStorage.setItem('user', JSON.stringify(user));
        debugger;
        console.log(user);

        alert('Login Successful');
        this._route.navigate(['/profile'])

      }
      else
        alert('Login Failed');
    });
  }


  private nameSubject = new BehaviorSubject<string>('Guest');
  name$ = this.nameSubject.asObservable();

  updateName(newName: string) {
    this.nameSubject.next(newName);
  }

  get currentName(): string {
    return this.nameSubject.value;
  }



}
