import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSedesFunerariasComponent } from './editar-sedes-funerarias.component';

describe('EditarSedesFunerariasComponent', () => {
  let component: EditarSedesFunerariasComponent;
  let fixture: ComponentFixture<EditarSedesFunerariasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarSedesFunerariasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarSedesFunerariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
