import { TestBed } from '@angular/core/testing';

import { SedesFunerariaService } from './sedes-funerarias.servicio';

describe('SedesFunerariaService', () => {
  let service: SedesFunerariaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SedesFunerariaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
