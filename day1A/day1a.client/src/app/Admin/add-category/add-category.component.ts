import { Component } from '@angular/core';
import { AdminService } from '../../Services/AdminService';

@Component({
  selector: 'app-add-category',
  standalone: false,
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {

  constructor(private _admin: AdminService) { }


  ngOnInit() { }

  AddCategory(Category: any) {
    this._admin.AddCategory(Category).subscribe(() => {
    });
    alert("Category Added Successfully");

  }



}
