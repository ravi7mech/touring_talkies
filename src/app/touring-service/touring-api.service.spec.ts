import { TestBed } from '@angular/core/testing';

import { TouringAPIService } from './touring-api.service';

describe('TouringAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TouringAPIService = TestBed.get(TouringAPIService);
    expect(service).toBeTruthy();
  });
});
