import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';


const routes: Routes = [
  { path: 'SignUp-component', component: SignUpComponent },
  { path: 'SignIn-component', component: SignInComponent },
  { path: 'Categories-component', component: CategoriesComponent },
  { path: 'Products-component/:id', component: ProductsComponent  },
  { path: 'Home', component: HomeComponent },
  { path: 'productDetails/:id', component: ProductdetailsComponent },

  { path: "", pathMatch: "full", component: HomeComponent }




]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
