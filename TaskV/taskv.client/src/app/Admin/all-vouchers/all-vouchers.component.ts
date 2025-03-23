import { Component } from '@angular/core';
import { VouchersControlService } from '../../Services/vouchers-control.service';

@Component({
  selector: 'app-all-vouchers',
  standalone: false,
  templateUrl: './all-vouchers.component.html',
  styleUrl: './all-vouchers.component.css'
})
export class AllVouchersComponent {

  ngOnInit() {
    this.AllVouchers();
  }

  constructor(private _vouch: VouchersControlService) {

  }
  AllVouchersContainer: any;
  AllVouchers() {
    this._vouch.AllVouchers().subscribe((data) => {
      this.AllVouchersContainer = data;
    })
  }

}
