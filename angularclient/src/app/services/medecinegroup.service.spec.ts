import { TestBed, inject } from '@angular/core/testing';

import { MedecinegroupService } from './medecinegroup.service';

describe('MedecinegroupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MedecinegroupService]
    });
  });

  it('should be created', inject([MedecinegroupService], (service: MedecinegroupService) => {
    expect(service).toBeTruthy();
  }));
});
