import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentList } from './aliment-list';

describe('AlimentList', () => {
  let component: AlimentList;
  let fixture: ComponentFixture<AlimentList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlimentList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlimentList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
