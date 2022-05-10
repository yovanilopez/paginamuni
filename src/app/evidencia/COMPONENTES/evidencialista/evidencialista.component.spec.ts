import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvidencialistaComponent } from './evidencialista.component';

describe('EvidencialistaComponent', () => {
  let component: EvidencialistaComponent;
  let fixture: ComponentFixture<EvidencialistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvidencialistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvidencialistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
