import { TestBed } from '@angular/core/testing';

import { FloorService } from '../_services/floor.service';

describe('FloorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FloorService = TestBed.get(FloorService);
    expect(service).toBeTruthy();
  });
});
