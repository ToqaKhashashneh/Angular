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
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { AddProductComponent } from './Admin/add-product/add-product.component';
import { ShowCategoryComponent } from './Admin/show-category/show-category.component';
import { ShowProductsComponent } from './Admin/show-products/show-products.component';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { EditcategoryComponent } from './Admin/editcategory/editcategory.component';
import { EditproductComponent } from './Admin/editproduct/editproduct.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ProfileComponent } from './profile/profile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';







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
    DashboardComponent,
    ShowCategoryComponent,
    ShowProductsComponent,
    AddProductComponent,
    AddCategoryComponent,
    EditcategoryComponent,
    EditproductComponent,
    ParentComponent,
    ChildComponent,
    ProfileComponent,
    EditprofileComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, FormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


