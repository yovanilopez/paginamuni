import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonamodifComponent } from './personamodif.component';

describe('PersonamodifComponent', () => {
  let component: PersonamodifComponent;
  let fixture: ComponentFixture<PersonamodifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonamodifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonamodifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
