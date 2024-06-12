import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarServicioPlanComponent } from './editar-servicio-plan.component';

describe('EditarServicioPlanComponent', () => {
  let component: EditarServicioPlanComponent;
  let fixture: ComponentFixture<EditarServicioPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarServicioPlanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarServicioPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
