import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  { path: 'SignUp-component', component: SignUpComponent },
  { path: 'SignIn-component', component: SignInComponent },
  { path: 'Categories-component', component: CategoriesComponent },
  { path: 'Products-component', component: ProductsComponent },
  { path: "", pathMatch: "full", component: SignUpComponent }




]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
