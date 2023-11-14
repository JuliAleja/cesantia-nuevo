import { TestBed } from '@angular/core/testing';

import { PrecedentsService } from './precedents.service';

describe('PrecedentsService', () => {
  let service: PrecedentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrecedentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
