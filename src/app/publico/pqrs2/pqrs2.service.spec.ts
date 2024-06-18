import { TestBed } from '@angular/core/testing';

import { Pqrs2Service } from './pqrs2.service';

describe('Pqrs2Service', () => {
  let service: Pqrs2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pqrs2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
