import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { ConsultaReporteService } from 'src/app/services/consulta-reporte.service';
import { ConsultaReporteServiceMock } from 'src/app/tests/services/consultar-reporte.service.mock';
import { ConsultaReporteComponent } from './consulta-reporte.component';

describe('ConsultaReporteComponent', () => {

  let component: ConsultaReporteComponent;
  let fixture: ComponentFixture<ConsultaReporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaReporteComponent ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        FormBuilder,
        { provide: ConsultaReporteService, useClass: ConsultaReporteServiceMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaReporteComponent);
    component = fixture.componentInstance;
  });

  it('Cuando se renderize el componente se debe inicializar el formulario', () => {
    fixture.detectChanges();
    expect(component.form.get('idTecnico')).toBeDefined();
    expect(component.form.get('semana')).toBeDefined();
  });

  it('Cuando se llame al metodo consultar y todo fue exitoso debe de mostrar la tabla', () => {
    fixture.detectChanges();
    component.form.get('idTecnico').setValue('12');
    component.form.get('semana').setValue('12');
    const compiled = fixture.debugElement.nativeElement;
    const tabla = compiled.querySelector('#tabla-resumen');
    fixture.detectChanges();
    component.consultar();
    expect(tabla).toBeDefined();
  });

});
