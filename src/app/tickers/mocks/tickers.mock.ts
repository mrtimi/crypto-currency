import { Observable, of } from "rxjs";


const tickersList = [];
const ticker = {};
export class TickersServiceMock{
    getTickersPage(): Observable<any>{
        return of(tickersList);
    }

    getTickersNumber(): Observable<any>{
        return of(tickersList);
    }
    
    getTickerById(): Observable<any>{
        return of(ticker);
    }

}