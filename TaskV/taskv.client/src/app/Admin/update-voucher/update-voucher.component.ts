import { Component } from '@angular/core';
import { VouchersControlService } from '../../Services/vouchers-control.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-voucher',
  standalone: false,
  templateUrl: './update-voucher.component.html',
  styleUrl: './update-voucher.component.css'
})
export class UpdateVoucherComponent {

  constructor(private vouchser: VouchersControlService, private _active: ActivatedRoute) { }

  VoucherContainer: any;
  VoucherID: any;

  ngOnInit() {
    debugger;
    this.VoucherID = this._active.snapshot.paramMap.get('id');
    this.vouchser.GetVoucherByID(this.VoucherID).subscribe((data) => { this.VoucherContainer = data });
  }

  UpdateVoucher(UpdatedVoucher: any) {
    this.vouchser.UpdateVoucher(UpdatedVoucher, this.VoucherID).subscribe(() => {
    alert("Updated Successfuly!")})
  }

}
