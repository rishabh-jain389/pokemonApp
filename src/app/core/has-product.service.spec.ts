import { TestBed } from '@angular/core/testing';

import { HasProductService } from './has-product.service';

describe('HasProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HasProductService = TestBed.get(HasProductService);
    expect(service).toBeTruthy();
  });
});
