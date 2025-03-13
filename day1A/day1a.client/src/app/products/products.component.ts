import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { URLService } from '../Services/url.service';


@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {


  products: any[] = [];
  categoryId: any;
  constructor(private ser: URLService , private _active: ActivatedRoute) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.categoryId = this._active.snapshot.paramMap.get("id");

    this.ser.getProductsByCategoryID(this.categoryId).subscribe((data) => {

      this.products = data.filter((p: any) => p.categoryID == this.categoryId)
    })

  }


}
