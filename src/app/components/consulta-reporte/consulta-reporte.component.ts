import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConsultaReporte } from 'src/app/models/consulta.interface';
import { ConsultaReporteService } from 'src/app/services/consulta-reporte.service';

@Component({
  selector: 'app-consulta-reporte',
  templateUrl: './consulta-reporte.component.html',
  styleUrls: ['./consulta-reporte.component.css']
})
export class ConsultaReporteComponent implements OnInit {

  form: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly consultaReporteService: ConsultaReporteService
  ) { }

  ngOnInit(): void {
    this.crearFormulario();
  }

  crearFormulario(): void {
    this.form = this.formBuilder.group({
      idTecnico: ['', Validators.required],
      semana: ['', Validators.required]
    });
  }

  consultar() {
    (this.form.valid)
      ? this.consultaReporteService.consultarReporte(this.form.getRawValue())
        .subscribe((consulta: ConsultaReporte) => {
          console.log(consulta)
        }, (err: HttpErrorResponse) => {
          console.log(err)
        })
      : this.form.markAllAsTouched();
  }

  get idTecnicoNoValido(): boolean {
    return this.form.get('idTecnico').invalid && this.form.get('idTecnico').touched;
  }

  get semanaNoValida(): boolean {
    return this.form.get('semana').invalid && this.form.get('semana').touched;
  }

}
