import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisionlistaComponent } from './revisionlista.component';

describe('RevisionlistaComponent', () => {
  let component: RevisionlistaComponent;
  let fixture: ComponentFixture<RevisionlistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevisionlistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisionlistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
