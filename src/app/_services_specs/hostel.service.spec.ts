
import { TestBed } from '@angular/core/testing';

import { HostelService } from '../_services/hostel.service';

describe('HostelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HostelService = TestBed.get(HostelService);
    expect(service).toBeTruthy();
  });
});
