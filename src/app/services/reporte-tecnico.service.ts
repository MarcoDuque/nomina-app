import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReporteTecnico } from '../models/reporte.interface';
import { BaseService } from './base.service';

@Injectable()
export class ReporteTecnicoService extends BaseService {

  constructor(
    private readonly http: HttpClient
  ) { super(); }

  guardarReporte(reporte: ReporteTecnico): Observable<ReporteTecnico> {
    return this.http.post<ReporteTecnico>(`${this.pathService}/reportes`, reporte);
  }

}
