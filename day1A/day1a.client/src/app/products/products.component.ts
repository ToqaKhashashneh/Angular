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
  categoryId: string = ''; 

  constructor(private route: ActivatedRoute, private ser: URLService) { }

  ngOnInit() {

    this.getProducts();
  }

  getProducts() {
    this.categoryId = this.route.snapshot.paramMap.get('id') || '';
    this.ser.getProductsByCategoryID(this.categoryId).subscribe((data) => {
      this.products = data;
    }); 
      
    }
  
}
