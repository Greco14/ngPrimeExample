import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StaffType } from './../rgx/models/staff-type';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url = 'http://www.json-generator.com/api/json/get/bOKbXMYIPm?indent=2';

  constructor(private http: HttpClient) { }

  getDatos(): Observable<StaffType[]> {
    return this.http
      .get<StaffType[]>( this.url )
  }
}