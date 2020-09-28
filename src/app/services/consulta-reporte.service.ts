import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConsultaReporte } from '../models/consulta.interface';
import { ReporteFinal } from '../models/reporte-final.interface';
import { BaseService } from './base.service';

@Injectable()
export class ConsultaReporteService extends BaseService {

  constructor(
    private readonly http: HttpClient
  ) { super(); }

  consultarReporte(consulta: ConsultaReporte): Observable<ReporteFinal> {
    return this.http.get<ReporteFinal>(`${this.pathService}/reporte?idTecnico=${consulta.idTecnico}&semana=${consulta.semana}`);
  }


}
