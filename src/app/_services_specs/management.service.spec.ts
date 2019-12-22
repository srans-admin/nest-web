import { TestBed } from '@angular/core/testing';

import { ManagementService } from '../_services/management.service';

describe('ManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManagementService = TestBed.get(ManagementService);
    expect(service).toBeTruthy();
  });
});
