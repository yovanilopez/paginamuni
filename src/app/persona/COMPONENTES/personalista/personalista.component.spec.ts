import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalistaComponent } from './personalista.component';

describe('PersonalistaComponent', () => {
  let component: PersonalistaComponent;
  let fixture: ComponentFixture<PersonalistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
