import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarClientePlanComponent } from './listar-cliente-plan.component';

describe('ListarClientePlanComponent', () => {
  let component: ListarClientePlanComponent;
  let fixture: ComponentFixture<ListarClientePlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarClientePlanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarClientePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
