import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VouchersControlService {

  constructor(private _http: HttpClient) { }

  VoucherUrl = 'https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher';

  AllVouchers() {

    return this._http.get(this.VoucherUrl);
  }

  AddVoucher(NewVoucher: any) {
    return this._http.post(this.VoucherUrl, NewVoucher)
  }

  UpdateVoucher(UpdatedVoucher: any, VoucherID: any) {
    return this._http.put(`${this.VoucherUrl}/${VoucherID}`, UpdatedVoucher)
  }

  GetVoucherByID(VoucherID: any) {
    return this._http.get(`${this.VoucherUrl}/${VoucherID}`)
  }

  DeleteVoucher(VoucherID: any) {
    return this._http.delete(`${this.VoucherUrl}/${VoucherID}`)
  }

}
