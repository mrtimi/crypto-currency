import { TestBed } from '@angular/core/testing';
import 
  { 
      HttpClientTestingModule,
      HttpTestingController
  } from '@angular/common/http/testing';
import { TickersService } from './tickers.service';

describe('TickersService', () => {
  let tickersService: TickersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        TickersService
      ]
    });

    tickersService = TestBed.get(TickersService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: TickersService = TestBed.get(TickersService);
    expect(service).toBeTruthy();
  });

  it('should successfully get tickers', (done) => {
    let response  = {  
      "data":[],
      "info":{ "coins_num":2022, "time":1550500205}
    };
    tickersService.getTickersNumber()
                   .subscribe(res => {
                     expect(res).toEqual(response);
                     done();
                   });

    let countryRequest = httpMock.expectOne('https://api.coinlore.com/api/tickers/');
    countryRequest.flush(response);

    httpMock.verify();
  });
});
