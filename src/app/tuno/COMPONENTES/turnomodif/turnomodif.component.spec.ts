import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnomodifComponent } from './turnomodif.component';

describe('TurnomodifComponent', () => {
  let component: TurnomodifComponent;
  let fixture: ComponentFixture<TurnomodifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurnomodifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnomodifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
