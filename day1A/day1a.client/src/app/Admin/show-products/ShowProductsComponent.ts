import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../../Services/AdminService';


@Component({
    selector: 'app-show-products',
    standalone: false,
    templateUrl: './show-products.component.html',
    styleUrl: './show-products.component.css'
})
export class ShowProductsComponent {
    constructor(private _admin: AdminService, private _active: ActivatedRoute) { }

    CategoryId: any;
    ProductData: any;

    showProducts() {
        this.CategoryId = this._active.snapshot.paramMap.get("id");
        this._admin.showProducts().subscribe((data: any) => {
          this.ProductData = data.filter((p: any) => p.categoryId == this.CategoryId);
        });
    }

}
