import { TestBed } from '@angular/core/testing';

import { VacateService } from './vacate.service';

describe('VacateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VacateService = TestBed.get(VacateService);
    expect(service).toBeTruthy();
  });
});
