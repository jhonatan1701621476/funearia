import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearSedesFunerariasComponent } from './crear-sedes-funerarias.component';

describe('CrearSedesFunerariasComponent', () => {
  let component: CrearSedesFunerariasComponent;
  let fixture: ComponentFixture<CrearSedesFunerariasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearSedesFunerariasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearSedesFunerariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
