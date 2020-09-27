import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import * as moment from 'moment';

@Component({
  selector: 'app-reporte-tecnico',
  templateUrl: './reporte-tecnico.component.html',
  styleUrls: ['./reporte-tecnico.component.css']
})
export class ReporteTecnicoComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  crearFormulario() {
    this.form = this.formBuilder.group({
      idTecnico: ['', Validators.required],
      idServicio: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required],
    });
  }

  guardar() {
    console.log(this.form);
    console.log(this.form.get('fechaInicio').value);
  }

  get validacionFechaFin() {

    let fechaInicio = moment(this.form.get('fechaInicio').value, "YYYY/MM/DD HH:mm")
    let fechaFin = moment(this.form.get('fechaFin').value, "YYYY/MM/DD HH:mm")

    if (fechaFin > fechaInicio) return true
  }

  get idTecnicoNoValido() {
    return this.form.get('idTecnico').invalid && this.form.get('idTecnico').touched
  }

  get idServicioNoValido() {
    return this.form.get('idServicio').invalid && this.form.get('idServicio').touched
  }

  get fechaInicioNoValida() {
    return this.form.get('fechaInicio').invalid && this.form.get('fechaInicio').touched
  }

  get fechaFinNoValida() {
    return this.form.get('fechaFin').invalid && this.form.get('fechaFin').touched
  }


}
