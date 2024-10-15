import { TestBed } from '@angular/core/testing';

import { ActiveWindowService } from './active-window.service';

describe('WindowService', () => {
  let service: ActiveWindowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiveWindowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
