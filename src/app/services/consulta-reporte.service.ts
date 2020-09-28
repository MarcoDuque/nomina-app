import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConsultaReporte } from '../models/consulta.interface';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ConsultaReporteService extends BaseService {

  constructor(
    private readonly http: HttpClient
  ) { super(); }

  consultarReporte(consulta: ConsultaReporte): Observable<ConsultaReporte> {
    return this.http.get<ConsultaReporte>(`${this.pathService}/reporte?idTecnico=${consulta.idTecnico}&semana=${consulta.semana}`);
  }


}
