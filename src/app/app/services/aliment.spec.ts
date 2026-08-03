import { TestBed } from '@angular/core/testing';

import { Aliment } from './aliment';

describe('Aliment', () => {
  let service: Aliment;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Aliment);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
