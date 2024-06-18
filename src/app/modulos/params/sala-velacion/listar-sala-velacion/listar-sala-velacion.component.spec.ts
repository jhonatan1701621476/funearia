import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSalaVelacionComponent } from './listar-sala-velacion.component';

describe('ListarSalaVelacionComponent', () => {
  let component: ListarSalaVelacionComponent;
  let fixture: ComponentFixture<ListarSalaVelacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarSalaVelacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarSalaVelacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
