import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class AdminService {

    constructor(private _http: HttpClient) { }

  private CategoriesAPI = "https://67cd64b6dd7651e464ee3d63.mockapi.io/categories";
  private ProductsAPI = "https://67cd64b6dd7651e464ee3d63.mockapi.io/products";


    showCategories() {
        return this._http.get(this.CategoriesAPI);
    }

  showProducts() {
    return this._http.get(this.ProductsAPI);
  }



}
