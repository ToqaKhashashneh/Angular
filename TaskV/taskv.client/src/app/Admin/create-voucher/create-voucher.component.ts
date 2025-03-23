import { Component } from '@angular/core';
import { VouchersControlService } from '../../Services/vouchers-control.service';

@Component({
  selector: 'app-create-voucher',
  standalone: false,
  templateUrl: './create-voucher.component.html',
  styleUrl: './create-voucher.component.css'
})
export class CreateVoucherComponent {

  constructor(private _vouchser: VouchersControlService) { }

  ngOnInit() {
   
  }

  AddVoucher(NewVoucher: any) {
    this._vouchser.AddVoucher(NewVoucher).subscribe(() => {
      alert("Added Successfuly!")
    });
  }



}
