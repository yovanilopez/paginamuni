import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisionmodifComponent } from './revisionmodif.component';

describe('RevisionmodifComponent', () => {
  let component: RevisionmodifComponent;
  let fixture: ComponentFixture<RevisionmodifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevisionmodifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisionmodifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
