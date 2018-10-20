import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { catchError, retry } from 'rxjs/operators';
import { ApiResponse } from '../touring-models/api-response';
import {
  BaseURL,
  Sections,
  Trend_MediaType,
  Trend_TimeWindow
} from '../touring-url-constants/url-constants';
@Injectable({
  providedIn: 'root'
})
export class TouringAPIService {
  constructor(public http: HttpClient) {}

  public Trending(): Observable<HttpResponse<ApiResponse>> {
    return this.http
      .get<ApiResponse>(
        BaseURL.Url +
          Sections.Trend +
          Trend_MediaType.MOVIE +
          Trend_TimeWindow.WEEK,
        { observe: 'response' }
      )
      .pipe(
        retry(1), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  public TrendingMock(): Observable<HttpResponse<ApiResponse>> {
    return this.http
      .get<ApiResponse>('http://localhost:4200/assets/mockdata.json', {
        observe: 'response'
      })
      .pipe(
        retry(1), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  private handleError(error: HttpErrorResponse) {
    let detailedError: string;
    if (error.error instanceof ErrorEvent) {
      detailedError = 'An error occurred:' + error.error.message;
    } else {
      detailedError =
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error.status_message}`;
    }
    return throwError(detailedError);
  }
}
