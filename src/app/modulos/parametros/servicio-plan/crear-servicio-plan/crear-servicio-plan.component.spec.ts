import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearServicioPlanComponent } from './crear-servicio-plan.component';

describe('CrearServicioPlanComponent', () => {
  let component: CrearServicioPlanComponent;
  let fixture: ComponentFixture<CrearServicioPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearServicioPlanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearServicioPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
