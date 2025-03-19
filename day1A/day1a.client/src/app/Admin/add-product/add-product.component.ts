import { Component } from '@angular/core';
import { AdminService } from '../../Services/AdminService';

@Component({
  selector: 'app-add-product',
  standalone: false,
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  constructor(private _admin: AdminService) { }

  ngOnInit() {
    this.getData();
  }

  category: any

  //to display categories in dropdown
  getData() {
    this._admin.showCategories().subscribe((data) => {
      this.category = data
    });

  }
  //to get selected category id (this method takes CategoryID as parameter and stores it)
  selectedId: any
  getSelectedData(id: any) {
    this.selectedId = id
  }


  //to add product
  AddCategory(data: any) {
    data.categoryId = this.selectedId;
    this._admin.AddProduct(data).subscribe(() => {

      alert("product added successfully")
    })
  }



  





}
