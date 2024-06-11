import { TestBed } from '@angular/core/testing';

import { ServicioPlanService } from './servicio-plan.service';

describe('ServicioPlanService', () => {
  let service: ServicioPlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioPlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
