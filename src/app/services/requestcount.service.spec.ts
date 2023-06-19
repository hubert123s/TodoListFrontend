import { TestBed } from '@angular/core/testing';

import { RequestcountService } from './requestcount.service';

describe('RequestcountService', () => {
  let service: RequestcountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestcountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
