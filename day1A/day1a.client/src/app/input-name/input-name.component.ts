import { Component } from '@angular/core';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-input-name',
  standalone: false,
  templateUrl: './input-name.component.html',
  styleUrl: './input-name.component.css'
})
export class InputNameComponent {

  newName = '';

  constructor(private userService: AuthService) { }

  update() {
    if (this.newName.trim()) {
      this.userService.updateName(this.newName.trim());
      this.newName = ''; // Clear input
    }


  }
}
