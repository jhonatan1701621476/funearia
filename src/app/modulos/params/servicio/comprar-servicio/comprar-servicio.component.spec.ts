import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprarServicioComponent } from './comprar-servicio.component';

describe('ComprarServicioComponent', () => {
  let component: ComprarServicioComponent;
  let fixture: ComponentFixture<ComprarServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComprarServicioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComprarServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
