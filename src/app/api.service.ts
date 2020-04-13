import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api = "http://localhost/db-project/h1b/";
  apiMega = "http://localhost/db-project/h1b_mega/";

  constructor(private httpClient: HttpClient) { }

  read(): any {
    return this.httpClient.get(this.api + "read.php");
  }

  readMega(): any {
    return this.httpClient.get(this.apiMega + "read.php");
  }
}
