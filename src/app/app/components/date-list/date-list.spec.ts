import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateList } from './date-list';

describe('DateList', () => {
  let component: DateList;
  let fixture: ComponentFixture<DateList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
