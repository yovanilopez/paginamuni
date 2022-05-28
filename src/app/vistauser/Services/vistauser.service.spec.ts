import { TestBed } from '@angular/core/testing';

import { VistauserService } from './vistauser.service';

describe('VistauserService', () => {
  let service: VistauserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VistauserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
