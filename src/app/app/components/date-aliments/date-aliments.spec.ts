import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateAliments } from './date-aliments';

describe('DateAliments', () => {
  let component: DateAliments;
  let fixture: ComponentFixture<DateAliments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateAliments]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateAliments);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
