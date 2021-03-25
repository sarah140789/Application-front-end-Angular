import { TestBed } from '@angular/core/testing';

import { DataInfoPersoService } from './data-info-perso.service';

describe('DataInfoPersoService', () => {
  let service: DataInfoPersoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataInfoPersoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
