import { TestBed } from '@angular/core/testing';

import { SelectionRouteService } from './selection-route.service';

describe('SelectionRouteService', () => {
  let service: SelectionRouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectionRouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
