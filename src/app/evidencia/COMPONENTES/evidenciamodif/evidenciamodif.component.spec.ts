import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvidenciamodifComponent } from './evidenciamodif.component';

describe('EvidenciamodifComponent', () => {
  let component: EvidenciamodifComponent;
  let fixture: ComponentFixture<EvidenciamodifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvidenciamodifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvidenciamodifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
