import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearSalaVelacionComponent } from './crear-sala-velacion.component';

describe('CrearSalaVelacionComponent', () => {
  let component: CrearSalaVelacionComponent;
  let fixture: ComponentFixture<CrearSalaVelacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearSalaVelacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearSalaVelacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
