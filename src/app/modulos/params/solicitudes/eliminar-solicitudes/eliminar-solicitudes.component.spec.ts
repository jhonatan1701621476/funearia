import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarSolicitudesComponent } from './eliminar-solicitudes.component';

describe('EliminarSolicitudesComponent', () => {
  let component: EliminarSolicitudesComponent;
  let fixture: ComponentFixture<EliminarSolicitudesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EliminarSolicitudesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EliminarSolicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
