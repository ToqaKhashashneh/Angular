import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  username: string = "Yaseer";

  
  imageUrl: string = "https://i.pinimg.com/736x/64/88/f8/6488f86b4acea4df0b6521fdbc245c6c.jpg";


 

  showMessage() {
    alert("Button Clicked!");
  }

  name: string = "";
  age: number = 0;


}
