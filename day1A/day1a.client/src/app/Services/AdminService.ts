import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AdminService {

    constructor(private _http: HttpClient) { }

    private CategoriesAPI = "https://67d5f9cd286fdac89bc0e100.mockapi.io/Categories";
    private ProductsAPI = "https://67cd64b6dd7651e464ee3d63.mockapi.io/products";

    showCategories() {
        return this._http.get(this.CategoriesAPI);
    }

    showProducts() {
        return this._http.get(this.ProductsAPI);
    }

    AddCategory(Category: any) {
        return this._http.post(this.CategoriesAPI, Category);
    }

    AddProduct(Product: any) {
        return this._http.post(this.ProductsAPI, Product);
    }

    EditCategory(EditedCategory: any, id: any) {
        return this._http.put(`${this.CategoriesAPI}/${id}`, EditedCategory);
    }

    GetCategoryById(id: any) {
        return this._http.get(`${this.CategoriesAPI}/${id}`);
    }

  EditProduct(EditedProduct: any, id: any) {
    return this._http.put(`${this.ProductsAPI}/${id}`, EditedProduct);
  }

  GetProductById(id: any) {
    return this._http.get(`${this.ProductsAPI}/${id}`);
  } 

}
