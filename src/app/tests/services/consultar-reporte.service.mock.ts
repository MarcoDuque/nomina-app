import { Observable, of } from 'rxjs';
import { ConsultaReporte } from 'src/app/models/consulta.interface';
import { ReporteFinal } from 'src/app/models/reporte-final.interface';

export class ConsultaReporteServiceMock {

  consultarReporte(consulta: ConsultaReporte): Observable<ReporteFinal> {
    return of({
      horasNormales: 0,
      horasNocturnas: 0,
      horasDominicales: 0,
      horasNormalesExtras: 0,
      horasNocturnasExtras: 0,
      horasDominicalesExtras: 0
    });
  }

}
