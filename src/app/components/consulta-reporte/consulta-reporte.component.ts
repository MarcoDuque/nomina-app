import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-consulta-reporte',
  templateUrl: './consulta-reporte.component.html',
  styleUrls: ['./consulta-reporte.component.css']
})
export class ConsultaReporteComponent implements OnInit {

  form: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder
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

  }

  get idTecnicoNoValido(): boolean {
    return this.form.get('idTecnico').invalid && this.form.get('idTecnico').touched;
  }

  get semanaNoValida(): boolean {
    return this.form.get('semana').invalid && this.form.get('semana').touched;
  }

}
