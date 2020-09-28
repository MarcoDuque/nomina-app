import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import * as moment from 'moment';
import { ReporteTecnico } from 'src/app/models/reporte.interface';
import { ReporteTecnicoService } from 'src/app/services/reporte-tecnico.service';

@Component({
  selector: 'app-reporte-tecnico',
  templateUrl: './reporte-tecnico.component.html',
  styleUrls: ['./reporte-tecnico.component.css']
})
export class ReporteTecnicoComponent implements OnInit {

  form: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly reporteTecnico: ReporteTecnicoService
  ) { }

  ngOnInit() {
    this.crearFormulario();
  }

  crearFormulario(): void {
    this.form = this.formBuilder.group({
      idTecnico: ['', Validators.required],
      idServicio: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required],
    });
  }

  guardar(): void {
    (this.form.valid)
      ? this.reporteTecnico.guardarReporte(this.form.getRawValue())
        .subscribe((reporte: ReporteTecnico) => {
          this.form.reset();
          alert('Registro guardado exitosamente');
        }, (err: HttpErrorResponse) => {
          alert('El registro no se pudo guardar');
        })
      : this.form.markAllAsTouched();
  }

  get validacionFechaFin(): boolean {
    const fechaInicio = moment(this.form.get('fechaInicio').value, "YYYY/MM/DD HH:mm");
    const fechaFin = moment(this.form.get('fechaFin').value, "YYYY/MM/DD HH:mm");
    return fechaFin < fechaInicio;
  }

  get idTecnicoNoValido(): boolean {
    return this.form.get('idTecnico').invalid && this.form.get('idTecnico').touched;
  }

  get idServicioNoValido(): boolean {
    return this.form.get('idServicio').invalid && this.form.get('idServicio').touched;
  }

  get fechaInicioNoValida(): boolean {
    return this.form.get('fechaInicio').invalid && this.form.get('fechaInicio').touched;
  }

  get fechaFinNoValida(): boolean {
    return this.form.get('fechaFin').invalid && this.form.get('fechaFin').touched;
  }


}
