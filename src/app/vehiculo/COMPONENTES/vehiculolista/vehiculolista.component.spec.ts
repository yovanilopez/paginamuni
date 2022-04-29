import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculolistaComponent } from './vehiculolista.component';

describe('VehiculolistaComponent', () => {
  let component: VehiculolistaComponent;
  let fixture: ComponentFixture<VehiculolistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculolistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculolistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
