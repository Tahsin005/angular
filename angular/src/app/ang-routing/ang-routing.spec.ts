import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngRouting } from './ang-routing';

describe('AngRouting', () => {
  let component: AngRouting;
  let fixture: ComponentFixture<AngRouting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngRouting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngRouting);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
