import { Component } from '@angular/core';
import { AdminService } from '../../Services/AdminService';

@Component({
  selector: 'app-show-category',
  standalone: false,
  templateUrl: './show-category.component.html',
  styleUrl: './show-category.component.css'
})
export class ShowCategoryComponent {

  constructor(private _admin: AdminService) { }

  categories: any 
  ShowCategory() {
    this._admin.showCategories().subscribe((data) => {
      this.categories = data
    });
  }

  ngOnInit() {
    this.ShowCategory();
  }

  



}
