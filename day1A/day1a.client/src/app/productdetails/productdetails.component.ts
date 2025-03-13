import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { URLService } from '../Services/url.service';

@Component({
  selector: 'app-productdetails',
  standalone: false,
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent {


  productId: string = '';
  product: any = {};

  constructor(private route: ActivatedRoute, private ser: URLService) { }

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id') || '';

    this.getProduct();
  }
  getProduct() {
    if (this.productId) {
      this.ser.getProductById(this.productId).subscribe((data) => {
        this.product = data;
      },
      );
    }
  }

}
