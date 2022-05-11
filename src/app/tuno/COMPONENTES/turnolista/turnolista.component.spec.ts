import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnolistaComponent } from './turnolista.component';

describe('TurnolistaComponent', () => {
  let component: TurnolistaComponent;
  let fixture: ComponentFixture<TurnolistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurnolistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnolistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
