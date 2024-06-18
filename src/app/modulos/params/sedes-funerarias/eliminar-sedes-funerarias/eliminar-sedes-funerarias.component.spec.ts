import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarSedesFunerariasComponent } from './eliminar-sedes-funerarias.component';

describe('EliminarSedesFunerariasComponent', () => {
  let component: EliminarSedesFunerariasComponent;
  let fixture: ComponentFixture<EliminarSedesFunerariasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EliminarSedesFunerariasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EliminarSedesFunerariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
