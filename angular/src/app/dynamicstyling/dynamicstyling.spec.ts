import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dynamicstyling } from './dynamicstyling';

describe('Dynamicstyling', () => {
  let component: Dynamicstyling;
  let fixture: ComponentFixture<Dynamicstyling>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dynamicstyling]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dynamicstyling);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
