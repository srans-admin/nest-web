import { TestBed } from '@angular/core/testing';

import { UserlistService } from './userlist.service';

describe('UserlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserlistService = TestBed.get(UserlistService);
    expect(service).toBeTruthy();
  });
});
