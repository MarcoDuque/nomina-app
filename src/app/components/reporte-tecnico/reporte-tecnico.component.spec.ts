import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteTecnicoComponent } from './reporte-tecnico.component';

describe('ReporteTecnicoComponent', () => {
  let component: ReporteTecnicoComponent;
  let fixture: ComponentFixture<ReporteTecnicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteTecnicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteTecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
