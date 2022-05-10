import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagolistaComponent } from './pagolista.component';

describe('PagolistaComponent', () => {
  let component: PagolistaComponent;
  let fixture: ComponentFixture<PagolistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagolistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagolistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
