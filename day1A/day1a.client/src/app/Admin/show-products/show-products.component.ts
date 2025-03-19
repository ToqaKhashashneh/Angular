import { Component } from '@angular/core';
import { AdminService } from '../../Services/AdminService';

@Component({
  selector: 'app-show-products',
  standalone: false,
  templateUrl: './show-products.component.html',
  styleUrl: './show-products.component.css'
})
export class ShowProductsComponent {
  products: any;
  constructor(private _admin: AdminService) { }

  ngOnInit() {
    this.ShowProducts();
  }

  ShowProducts() {
    this._admin.showProducts().subscribe((data) => {
      this.products = data;
    });

  }

}
