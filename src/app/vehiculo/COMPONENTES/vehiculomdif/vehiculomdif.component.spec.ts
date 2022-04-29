import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculomdifComponent } from './vehiculomdif.component';

describe('VehiculomdifComponent', () => {
  let component: VehiculomdifComponent;
  let fixture: ComponentFixture<VehiculomdifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculomdifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculomdifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
