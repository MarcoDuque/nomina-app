import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaReporteComponent } from './consulta-reporte.component';

describe('ConsultaReporteComponent', () => {
  let component: ConsultaReporteComponent;
  let fixture: ComponentFixture<ConsultaReporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaReporteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
