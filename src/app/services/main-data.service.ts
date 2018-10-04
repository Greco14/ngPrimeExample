import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class MainDataService {

  constructor(private http: HttpClient) {}

    getData() {
      return this.http.get('http://www.json-generator.com/api/json/get/ceinJeXILC?indent=2')
                .toPromise()
                .then(res => {return res})
                .then(res => { return res; });
    }
}
