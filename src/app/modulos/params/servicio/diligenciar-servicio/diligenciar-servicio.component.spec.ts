import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiligenciarServicioComponent } from './diligenciar-servicio.component';

describe('DiligenciarServicioComponent', () => {
  let component: DiligenciarServicioComponent;
  let fixture: ComponentFixture<DiligenciarServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiligenciarServicioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiligenciarServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
