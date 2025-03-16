import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  standalone: false,
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {



  constructor(private _authService: AuthService, private _route: Router) { }


  ngOnInit() {

  }
 

  AddNewUser(NewUser: any) {
    this._authService.OnSignup(NewUser).subscribe();
    this._route.navigate(['/SignIn-component'])

  }

}
