import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaReporteComponent } from './components/consulta-reporte/consulta-reporte.component';
import { ReporteTecnicoComponent } from './components/reporte-tecnico/reporte-tecnico.component';


const routes: Routes = [
  {path: 'formulario', component: ReporteTecnicoComponent},
  {path: 'consulta', component: ConsultaReporteComponent },
  {path: '**', component: ReporteTecnicoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
