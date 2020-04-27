import { TestBed } from '@angular/core/testing';

import { SuncityService } from './suncity.service';

describe('SuncityService', () => {
  let service: SuncityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuncityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
