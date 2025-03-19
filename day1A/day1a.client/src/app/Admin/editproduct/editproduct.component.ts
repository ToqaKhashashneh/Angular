import { Component } from '@angular/core';
import { AdminService } from '../../Services/AdminService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editproduct',
  standalone: false,
  templateUrl: './editproduct.component.html',
  styleUrl: './editproduct.component.css'
})
export class EditproductComponent {

  constructor(private _admin: AdminService, private _active: ActivatedRoute) { }

  ProductContent: any;
  ngOnInit() {

    this.getProduct();
    this.getCategory();
   
  }

  getProduct() {
  let id = this._active.snapshot.paramMap.get("id");
  this._admin.GetProductById(id).subscribe((data: any) => {
    this.ProductContent = data;});
  }
  CategoryContent: any;
  getCategory() {
    this._admin.showCategories().subscribe((data) => {
      this.CategoryContent = data;
    });
  }

    Editproduct(EdittedProduct:any ){
      let id = this._active.snapshot.paramMap.get("id");
      this._admin.EditProduct(EdittedProduct, id).subscribe((data: any) => {
        alert("Updated Successfully");
});
    };


}

interface ProductContent {
  name: string;
  avatar: string;
  categoryId: string;
}
