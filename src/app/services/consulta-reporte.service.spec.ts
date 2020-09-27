import { TestBed } from '@angular/core/testing';

import { ConsultaReporteService } from './consulta-reporte.service';

describe('ConsultaReporteService', () => {
  let service: ConsultaReporteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaReporteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
