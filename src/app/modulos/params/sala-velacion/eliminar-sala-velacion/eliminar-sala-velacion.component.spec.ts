import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarSalaVelacionComponent } from './eliminar-sala-velacion.component';

describe('EliminarSalaVelacionComponent', () => {
  let component: EliminarSalaVelacionComponent;
  let fixture: ComponentFixture<EliminarSalaVelacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EliminarSalaVelacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EliminarSalaVelacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
