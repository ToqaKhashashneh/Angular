import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
//X=>ngX
export class ChildComponent implements OnChanges {

  @Input()
  title!: string
  //OnChanges are used to detect changes in the input properties of the component
  
  ngOnChanges(changes: SimpleChanges) {
    console.log('change is: ',changes);
  }


}
