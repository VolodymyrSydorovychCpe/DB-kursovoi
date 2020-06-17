import { TestBed, inject } from '@angular/core/testing';

import { ClientOrderService } from './client-order.service';

describe('ClientOrderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientOrderService]
    });
  });

  it('should be created', inject([ClientOrderService], (service: ClientOrderService) => {
    expect(service).toBeTruthy();
  }));
});

