import { Employee } from './employee.model'
//import 'rxjs/add/operator/map'
//import 'rxjs/add/operator/toPromise'
import { HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Http, Request, Response, Headers, RequestOptions, URLSearchParams, RequestMethod } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, takeUntil, tap, catchError, debounce } from 'rxjs/operators';
import { debug } from 'util';
import { promise } from 'protractor';
import { Promise } from 'q';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  selectedEmployee: Employee;
  employeeList: Employee[];


  constructor(private http: Http) { }



  postEmployee(emp: any) {
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' })
    var requestOption = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post('http://localhost:56945/api/Employees', body, requestOption).pipe(tap((res: any) => { return res }),
      catchError(this.handleError));

  }
  getEmployee() {

    return this.http.get('http://localhost:56945/api/Employees').pipe(tap((res: any) => { return res }), catchError(this.handleError)).subscribe(response => {
      this.employeeList = JSON.parse(response._body);
    });

  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }
  PutEmployee(id, emp) {
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' })
    var requestOption = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put('http://localhost:56945/api/Employees/' + id, body, requestOption).pipe(tap((res: any) => { return res }),
      catchError(this.handleError));

  }
  DeleteEmployee(id: number) {

  return  this.http.delete('http://localhost:56945/api/Employees/' + id).pipe(tap((res: any) => { return res }),
      catchError(this.handleError));
  }

}
