import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearClientePlanComponent } from './crear-cliente-plan.component';

describe('CrearClientePlanComponent', () => {
  let component: CrearClientePlanComponent;
  let fixture: ComponentFixture<CrearClientePlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearClientePlanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearClientePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
