import { TestBed } from '@angular/core/testing';

import { VouchersControlService } from './vouchers-control.service';

describe('VouchersControlService', () => {
  let service: VouchersControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VouchersControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
