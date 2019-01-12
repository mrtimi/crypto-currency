import { TestBed } from '@angular/core/testing';

import { TickersService } from './tickers.service';

describe('TickersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TickersService = TestBed.get(TickersService);
    expect(service).toBeTruthy();
  });
});
