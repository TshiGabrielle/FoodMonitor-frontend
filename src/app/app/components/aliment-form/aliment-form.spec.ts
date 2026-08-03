import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentForm } from './aliment-form';

describe('AlimentForm', () => {
  let component: AlimentForm;
  let fixture: ComponentFixture<AlimentForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlimentForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlimentForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
