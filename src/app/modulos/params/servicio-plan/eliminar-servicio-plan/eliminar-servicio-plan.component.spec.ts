import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarServicioPlanComponent } from './eliminar-servicio-plan.component';

describe('EliminarServicioPlanComponent', () => {
  let component: EliminarServicioPlanComponent;
  let fixture: ComponentFixture<EliminarServicioPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EliminarServicioPlanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EliminarServicioPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
