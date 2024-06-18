import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSalaVelacionComponent } from './editar-sala-velacion.component';

describe('EditarSalaVelacionComponent', () => {
  let component: EditarSalaVelacionComponent;
  let fixture: ComponentFixture<EditarSalaVelacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarSalaVelacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarSalaVelacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
