import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagomodifComponent } from './pagomodif.component';

describe('PagomodifComponent', () => {
  let component: PagomodifComponent;
  let fixture: ComponentFixture<PagomodifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagomodifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagomodifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
