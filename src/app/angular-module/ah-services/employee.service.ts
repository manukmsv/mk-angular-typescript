import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './iemployee';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeeUrl = '/assets/data/employee.json';
  badEmployeeUrl = '/assets/data/employee2.json';

  constructor(private _http: HttpClient) {}

  getEmployeeList() {
    return [
      { id: 1, name: 'Andrew', age: 10 },
      { id: 2, name: 'Brandon', age: 22 },
      { id: 3, name: 'Christina', age: 8 },
      { id: 4, name: 'Deric', age: 18 },
      { id: 5, name: 'Elena', age: 50 }
    ];
  }

  getEmployees() {
    return this._http.get<IEmployee[]>(this.employeeUrl);
  }

  getEmployeeData() {
    return this._http
      .get<IEmployee[]>(this.badEmployeeUrl)
      .pipe(catchError(this.handleError));
  }

  // private errorHandler(error: HttpErrorResponse) {
  //   return Observable.throw(error.message || 'Server Error');
  // }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
