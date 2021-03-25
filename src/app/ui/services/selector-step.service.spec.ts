import { TestBed } from '@angular/core/testing';

import { SelectorStepService } from './selector-step.service';

describe('SelectorStepService', () => {
  let service: SelectorStepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectorStepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
