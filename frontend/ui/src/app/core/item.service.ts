import { Injectable } from '@angular/core';
import { Observable, catchError, delay, of, take, tap, throwError } from 'rxjs';
import { Item } from '../shared/models/item.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PageableResponse } from 'src/app/shared/models/pageable.response.model';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  API_URL = `${environment.apiUrl}/item`;

  constructor(private http: HttpClient) {}

  // GET /product?q=[q]&pageIndex=[pageIndex]&pageSize=[pageSize]  {}
  items$ = (q: string, pageIndex: number, pageSize: number) =>
    <Observable<PageableResponse<Item>>>(
      this.http
        .get<PageableResponse<Item>>(
          `${this.API_URL}?q=${q}&pageNumber=${pageIndex}&pageSize=${pageSize}`
        )
        .pipe(
          catchError(this.handleError),
          delay(1000), // (D)
        )
    );

  // GET /product/[id] {}
  item$ = (id: number) =>
    <Observable<Item>>(
      this.http
        .get<Item>(`${this.API_URL}/${id}`)
        .pipe(
          take(1),
          // delay(1000), // (D)
          catchError(this.handleError)
        )
    );

  /*
  productsByCategoryName$ = (categoryName: string) =>
    <Observable<Product[]>>(
      this.http
        .get<Product[]>(`${this.API_URL}?category=${categoryName}`)
        .pipe(catchError(this.handleError))
  );

  productsByQuery$ = (query: string): Observable<Product[]> => {
    if (query.trim() === '') {
      return of([]);
    } else {
      return this.http
        .get<Product[]>(`${this.API_URL}/search?q=${query}`)
        .pipe(catchError(this.handleError));
    }
  };
  */

  private handleError(error: HttpErrorResponse): Observable<never> {
    // TODO: implement
    console.log(error);
    return throwError(`An error occured - Error code: ${error.status}`);
  }
}
