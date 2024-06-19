import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pqrs2Component } from './pqrs2.component';

describe('Pqrs2Component', () => {
  let component: Pqrs2Component;
  let fixture: ComponentFixture<Pqrs2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Pqrs2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pqrs2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
