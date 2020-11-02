import { TestBed } from '@angular/core/testing';

import { PutovanjaService } from './putovanja.service';

describe('PutovanjaService', () => {
  let service: PutovanjaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PutovanjaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
