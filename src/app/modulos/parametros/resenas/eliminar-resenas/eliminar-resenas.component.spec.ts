import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarResenasComponent } from './eliminar-resenas.component';

describe('EliminarResenasComponent', () => {
  let component: EliminarResenasComponent;
  let fixture: ComponentFixture<EliminarResenasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EliminarResenasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EliminarResenasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
