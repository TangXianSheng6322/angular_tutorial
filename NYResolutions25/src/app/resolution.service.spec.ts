import { TestBed } from '@angular/core/testing';

import { ResolutionService } from './resolution/resolution.service';

describe('ResolutionService', () => {
  let service: ResolutionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResolutionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
