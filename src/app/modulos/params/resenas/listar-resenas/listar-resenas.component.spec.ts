import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarResenasComponent } from './listar-resenas.component';

describe('ListarResenasComponent', () => {
  let component: ListarResenasComponent;
  let fixture: ComponentFixture<ListarResenasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarResenasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarResenasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
