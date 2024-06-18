import { TestBed } from '@angular/core/testing';

import { SalaVelacionService } from './sala-velacion.service';

describe('SalaVelacionService', () => {
  let service: SalaVelacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalaVelacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
