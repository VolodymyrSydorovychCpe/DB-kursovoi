import { TestBed, inject } from '@angular/core/testing';

import { VendorOrderService } from './vendor-order.service';

describe('VendorOrderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VendorOrderService]
    });
  });

  it('should be created', inject([VendorOrderService], (service: VendorOrderService) => {
    expect(service).toBeTruthy();
  }));
});
