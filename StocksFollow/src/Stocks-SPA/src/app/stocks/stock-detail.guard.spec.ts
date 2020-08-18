import { TestBed } from '@angular/core/testing';

import { StockDetailGuard } from './stock-detail.guard';

describe('StockGuardGuard', () => {
  let guard: StockDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StockDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
