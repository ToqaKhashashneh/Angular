import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  loggeduser: any;
  
  ngOnInit() {
    const storedUser = sessionStorage.getItem("user");

    if (storedUser) {
      this.loggeduser = JSON.parse(storedUser);
  
    } else {
      alert("No user found!");
    }
  }

  showEditModal = false;

  updateUser(updatedUser: any) {
    this.loggeduser = updatedUser; // Update current user
    sessionStorage.setItem('user', JSON.stringify(this.loggeduser)); // Update storage
    this.showEditModal = false;
  }

  closeEditModal() {
    this.showEditModal = false;
  }
}
