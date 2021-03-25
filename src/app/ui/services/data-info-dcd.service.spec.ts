import { TestBed } from '@angular/core/testing';

import { DataInfoDcdService } from './data-info-dcd.service';

describe('DataInfoDcdService', () => {
  let service: DataInfoDcdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataInfoDcdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
