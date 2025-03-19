import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductsComponent } from './products/products.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { ShowCategoriesComponent } from './Admin/show-categories/ShowCategoriesComponent';
import { ShowProductsComponent } from './Admin/show-products/ShowProductsComponent';
import { AddProductComponent } from './Admin/add-product/add-product.component';





@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    NavBarComponent,
    FooterComponent,
    SignInComponent,
    CategoriesComponent,
    HomeComponent,
    ProductsComponent,
    ProductdetailsComponent,
    AddCategoryComponent,
    DashboardComponent,
    ShowCategoriesComponent,
    ShowProductsComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


