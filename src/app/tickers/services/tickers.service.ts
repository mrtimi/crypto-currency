import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';

import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TickersService {
  
  constructor(private http: HttpClient) { }

  getTickersPage(startIndex: number, pageSize: number): Observable<any>{
    let url = `${environment.apiUrl}tickers/?start=${startIndex}&limit=${pageSize}`
    return this.http.get(url).pipe(
      map((response)=>{
        return response;
      }),
      catchError(this.handleError)
    );
  }

  getTickersNumber(): Observable<any>{
    let url = `${environment.apiUrl}tickers/`
    return this.http.get(url).pipe(
      map((response)=>{
        return response;
      }),
      catchError(this.handleError)
    );
  }

  getTickerById(id: string){
    return this.http.get(environment.apiUrl+"ticker/?id="+id).pipe(
      map((response)=>{
        return response;
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend Error code ${error.status}, ` +
        `Body: ${error.error}`);
    }
    return throwError('Error; Please try again.');
  }


}
