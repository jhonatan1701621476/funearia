import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearResenasComponent } from './crear-resenas.component';

describe('CrearResenasComponent', () => {
  let component: CrearResenasComponent;
  let fixture: ComponentFixture<CrearResenasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearResenasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearResenasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
