import { Component } from '@angular/core';
import { URLService } from '../Services/url.service';

@Component({
  selector: 'app-categories',
  standalone: false,
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {

  //3 main things (constructor, ngOnInit, method/function)


  //1) Create a variable to store the data from the api
  categories: any = [];

  //2) Create a constructor to inject the service in the component
  constructor(private ser: URLService) { }

  //3) Call the function from the service
  get() {
    this.ser.getCategory().subscribe((data) => {
      this.categories = data;
    })
  }

  //4) Call the function on page load
  
  ngOnInit() {
    this.get();
  }



}
