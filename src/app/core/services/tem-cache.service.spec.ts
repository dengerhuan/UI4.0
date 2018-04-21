import { TestBed, inject } from '@angular/core/testing';

import { TemCacheService } from './tem-cache.service';

describe('TemCacheService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TemCacheService]
    });
  });

  it('should be created', inject([TemCacheService], (service: TemCacheService) => {
    expect(service).toBeTruthy();
  }));
});
