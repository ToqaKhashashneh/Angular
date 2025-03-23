import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  //myTitle = "I am the parent component";

  show = true;
  inputValue = 'initial';

  DestroyComponent() {
    this.show = !this.show;
  }

  changeInput() {
    this.inputValue = 'changed ' + Math.random();
  }


}
