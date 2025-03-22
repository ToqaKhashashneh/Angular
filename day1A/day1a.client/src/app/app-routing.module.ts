import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { AddProductComponent } from './Admin/add-product/add-product.component';
import { ShowCategoryComponent } from './Admin/show-category/show-category.component';
import { ShowProductsComponent } from './Admin/show-products/show-products.component';
import { EditcategoryComponent } from './Admin/editcategory/editcategory.component';
import { EditproductComponent } from './Admin/editproduct/editproduct.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ProfileComponent } from './profile/profile.component';



const routes: Routes = [
  { path: 'SignUp-component', component: SignUpComponent },
  { path: 'SignIn-component', component: SignInComponent },
  { path: 'Categories-component', component: CategoriesComponent },
  { path: 'Products-component/:id', component: ProductsComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'productDetails/:id', component: ProductdetailsComponent },
  { path: "", pathMatch: "full", component: HomeComponent },
  {
    path: 'Dashboard', component: DashboardComponent, children: [
      { path: 'AddCategory', component: AddCategoryComponent },
      { path: 'AddProduct', component: AddProductComponent },
      { path: 'ShowCategories', component: ShowCategoryComponent },
      { path: 'ShowProducts', component: ShowProductsComponent },
      { path: 'EditCategory/:id', component: EditcategoryComponent },
      { path: 'EditProduct/:id', component: EditproductComponent }
    ]
  },
  { path: "parent", component: ParentComponent },
  { path: "child", component: ChildComponent },
  { path: "profile", component: ProfileComponent }





]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
