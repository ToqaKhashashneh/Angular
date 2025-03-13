import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({ // (This service is injectable i can inject it in any component)
  providedIn: 'root' // (This service is globally for all component)
})
export class URLService {

  constructor(private url: HttpClient) { }


  private categoriesUrl = 'https://67cd64b6dd7651e464ee3d63.mockapi.io/categories';
  private productsUrl = 'https://67cd64b6dd7651e464ee3d63.mockapi.io/products';

  getCategory(): Observable<any[]> { // (This function is used to get the data from the api)
    return this.url.get<any[]>(this.categoriesUrl);
  }


  getProductsByCategoryID(categoryId: number): Observable<any[]> {
    return this.url.get<any[]>(`${this.productsUrl}?categoryId=${categoryId}`);
  }


  getProductById(productId: string): Observable<any> {
    return this.url.get<any>(`${this.productsUrl}/${productId}`);
  }

}
