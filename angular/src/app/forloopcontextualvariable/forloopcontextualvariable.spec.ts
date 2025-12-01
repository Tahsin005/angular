import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Forloopcontextualvariable } from './forloopcontextualvariable';

describe('Forloopcontextualvariable', () => {
  let component: Forloopcontextualvariable;
  let fixture: ComponentFixture<Forloopcontextualvariable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Forloopcontextualvariable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Forloopcontextualvariable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
