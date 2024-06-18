import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSedesFunerariasComponent } from './listar-sedes-funerarias.component';

describe('ListarSedesFunerariasComponent', () => {
  let component: ListarSedesFunerariasComponent;
  let fixture: ComponentFixture<ListarSedesFunerariasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarSedesFunerariasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarSedesFunerariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
