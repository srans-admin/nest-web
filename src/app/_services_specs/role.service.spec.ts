import { TestBed } from '@angular/core/testing';

import { RoleService } from '../_services/role.service';

describe('RoleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoleService = TestBed.get(RoleService);
    expect(service).toBeTruthy();
  });
});
