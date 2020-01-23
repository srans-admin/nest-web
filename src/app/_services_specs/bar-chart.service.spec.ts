import { TestBed } from '@angular/core/testing';

import { BarChartService } from './bar-chart.service';

describe('BarChartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BarChartService = TestBed.get(BarChartService);
    expect(service).toBeTruthy();
  });
});
