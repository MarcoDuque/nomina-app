import { TestBed } from '@angular/core/testing';

import { ReporteTecnicoService } from './reporte-tecnico.service';

describe('ReporteTecnicoService', () => {
  let service: ReporteTecnicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReporteTecnicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
