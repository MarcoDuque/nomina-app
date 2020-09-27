import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReporteTecnicoComponent } from './components/reporte-tecnico/reporte-tecnico.component';
import { ConsultaReporteComponent } from './components/consulta-reporte/consulta-reporte.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BaseService } from './services/base.service';
import { ReporteTecnicoService } from './services/reporte-tecnico.service';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    ReporteTecnicoComponent,
    ConsultaReporteComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    BaseService,
    ReporteTecnicoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
