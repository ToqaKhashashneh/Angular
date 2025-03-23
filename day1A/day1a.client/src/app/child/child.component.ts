import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
//X=>ngX
export class ChildComponent implements OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {


  @Input() testInput: any;

  constructor() {
    console.log('%cConstructor', 'color: green');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('%cngOnChanges', 'color: teal', changes);
  }

  ngOnInit(): void {
    console.log('%cngOnInit', 'color: orange');
  }

  ngDoCheck(): void {
    console.log('%cngDoCheck', 'color: purple');
  }

  ngAfterContentInit(): void {
    console.log('%cngAfterContentInit', 'color: blue');
  }

  ngAfterContentChecked(): void {
    console.log('%cngAfterContentChecked', 'color: blueviolet');
  }

  ngAfterViewInit(): void {
    console.log('%cngAfterViewInit', 'color: brown');
  }

  ngAfterViewChecked(): void {
    console.log('%cngAfterViewChecked', 'color: darkred');
  }

  ngOnDestroy(): void {
    console.log('%cngOnDestroy', 'color: red');
  }

}
