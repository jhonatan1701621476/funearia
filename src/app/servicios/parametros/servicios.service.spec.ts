import { TestBed } from '@angular/core/testing';

import { ParametrosService } from './servicios.service';

describe('ParametrosService', () => {
  let service: ParametrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParametrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
