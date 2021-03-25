import { TestBed } from '@angular/core/testing';

import { PartageinforecapService } from './partageinforecap.service';

describe('PartageinforecapService', () => {
  let service: PartageinforecapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartageinforecapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
