import { TestBed, inject } from '@angular/core/testing';

import { WebCacheService } from './web-cache.service';

describe('WebCacheService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebCacheService]
    });
  });

  it('should be created', inject([WebCacheService], (service: WebCacheService) => {
    expect(service).toBeTruthy();
  }));
});
