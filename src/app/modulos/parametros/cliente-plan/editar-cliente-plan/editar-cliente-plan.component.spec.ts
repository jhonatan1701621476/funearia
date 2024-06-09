import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarClientePlanComponent } from './editar-cliente-plan.component';

describe('EditarClientePlanComponent', () => {
  let component: EditarClientePlanComponent;
  let fixture: ComponentFixture<EditarClientePlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarClientePlanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarClientePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
