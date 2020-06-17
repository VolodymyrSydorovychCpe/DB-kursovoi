import { TestBed, inject } from '@angular/core/testing';

import { MedecineService } from './medecine.service';

describe('MedecineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MedecineService]
    });
  });

  it('should be created', inject([MedecineService], (service: MedecineService) => {
    expect(service).toBeTruthy();
  }));
});
