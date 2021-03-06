import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = "/api/employees";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getEmployee() {
    return this.http.get('http://localhost:2020/api/employees')
  }

  postEmployee(data){
    return this.http.post('http://localhost:2020/api/employees', data);
  }

  patchEmployee(data, id){
    return this.http.put('http://localhost:2020/api/employees/' +id, data);
  }

}
