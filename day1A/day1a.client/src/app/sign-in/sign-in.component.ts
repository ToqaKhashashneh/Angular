import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: false,
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {


  constructor(private _authservice: AuthService, private _route: Router) { }


  CheckUser(data: any) {
    this._authservice.OnLogin(data);
  }

}
