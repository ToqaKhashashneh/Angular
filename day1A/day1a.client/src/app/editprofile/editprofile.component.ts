import { Component,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-editprofile',
  standalone: false,
  templateUrl: './editprofile.component.html',
  styleUrl: './editprofile.component.css'
})

//CHILD COMPONENT
export class EditprofileComponent {
  //(to handel the data berween them)

  @Input() user: any;  // recieve data from profile
  @Output() onClose = new EventEmitter<void>(); //  close edit profile
  @Output() onSave = new EventEmitter<any>(); //send data to profile (when save is clicked)


  updatedUser: any = {};

  ngOnInit() {
    this.updatedUser = { ...this.user }; // Copy user data (to not modify the orginal directly)
  }


  saveChanges() {
    this.onSave.emit(this.updatedUser); // Send updated user data to profile
  }

  closeModal() {
    this.onClose.emit(); // Close edit profile
  }


}
