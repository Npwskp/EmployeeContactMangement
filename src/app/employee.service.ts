import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  baseUrl = 'api/employees';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl).pipe(
      tap((data) => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError<Employee[]>('getEmployees', []))
    );
  }

  getEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}/${id}`).pipe(
      tap((data) => console.log('Employee: ' + JSON.stringify(data))),
      catchError(this.handleError<Employee>('getEmployee'))
    );
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http
      .post<Employee>(this.baseUrl, employee, this.httpOptions)
      .pipe(
        tap((data) => console.log('Employee: ' + JSON.stringify(data))),
        catchError(this.handleError<Employee>('addEmployee'))
      );
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    return this.http
      .put<Employee>(this.baseUrl, employee, this.httpOptions)
      .pipe(
        tap((data) => console.log('Employee: ' + JSON.stringify(data))),
        catchError(this.handleError<Employee>('updateEmployee'))
      );
  }

  deleteEmployee(id: number): Observable<Employee> {
    return this.http.delete<Employee>(`${this.baseUrl}/${id}`).pipe(
      tap((data) => console.log('delete succesful')),
      catchError(this.handleError<Employee>('deleteEmployee'))
    );
  }
}
