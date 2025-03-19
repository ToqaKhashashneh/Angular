import { Component } from '@angular/core';
import { URLService } from '../Services/url.service';


@Component({
  selector: 'app-add-category',
  standalone: false,
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {

  constructor(private _urlservice : URLService) { }


  ngOnInit() {
  }


  AddNewCategory(NewCategory: any) {
    this._urlservice.AddCategory(NewCategory).subscribe();

  }
}
