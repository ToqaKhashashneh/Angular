import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllVouchersComponent } from './Admin/all-vouchers/all-vouchers.component';
import { CreateVoucherComponent } from './Admin/create-voucher/create-voucher.component';
import { UpdateVoucherComponent } from './Admin/update-voucher/update-voucher.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';

const routes: Routes = [
  { path: "", redirectTo: "Dashboard", pathMatch: "full" },
 
  {
    path: "Dashboard", component: DashboardComponent, children: [
  { path: "allVouchers", component: AllVouchersComponent },
  { path: "createVoucher", component: CreateVoucherComponent },
  { path: "editVoucher/:id", component: UpdateVoucherComponent },
  ] }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
