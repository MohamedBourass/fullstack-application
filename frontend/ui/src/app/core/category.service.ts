import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take, startWith, Observable, catchError, of, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from 'src/app/shared/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  API_URL = `${environment.apiUrl}/category`;
  categories!: Category[];

  constructor(private http: HttpClient) {
    this.categories$.pipe(take(1), startWith([])).subscribe(categories => {
      this.categories = categories;
    });
  }

  // GET /category {}
  categories$ = <Observable<Category[]>> this.http.get<Category[]>(`${this.API_URL}`).pipe(catchError(this.handleError));


  // GET /category/[id] {}
  public getCategory(id: number): Observable<Category> {
    // Attempt to find the product category in the local cache
    var category = this.categories.find((x) => x.id == id);
    if (category) {
      // If found in the cache, return it
      return of(category);
    } else {
      // If not found in the cache, fetch it from the API
      return this.http
        .get<Category>(`${this.API_URL}/${id}`)
        .pipe(
          // Update the local cache with the fetched category data
          tap((newCategory) => {
            this.categories.push(newCategory);
          }),
          take(1),
          catchError(this.handleError)
        );
    }
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    // TODO implement
    console.log(error);
    return throwError(`An error occured - Error code: ${error.status}`);
  }
}
