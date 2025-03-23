import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateVoucherComponent } from './Admin/create-voucher/create-voucher.component';
import { AllVouchersComponent } from './Admin/all-vouchers/all-vouchers.component';
import { UpdateVoucherComponent } from './Admin/update-voucher/update-voucher.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { SidebarComponent } from './Admin/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreateVoucherComponent,
    AllVouchersComponent,
    UpdateVoucherComponent,
    DashboardComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
