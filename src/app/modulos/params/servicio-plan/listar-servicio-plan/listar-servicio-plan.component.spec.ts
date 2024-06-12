import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarServicioPlanComponent } from './listar-servicio-plan.component';

describe('ListarServicioPlanComponent', () => {
  let component: ListarServicioPlanComponent;
  let fixture: ComponentFixture<ListarServicioPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarServicioPlanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarServicioPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
