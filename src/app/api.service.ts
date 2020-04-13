import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api = "http://localhost/db-project/h1b/";
  apiMega = "http://localhost/db-project/h1b_mega/";

  constructor(private httpClient: HttpClient) { }

  read(table: string): any {
    return this.httpClient.get(this.api + "read.php?table=" + table);
  }

  readMega(): any {
    return this.httpClient.get(this.apiMega + "read.php");
  }

  update(data, table): any {
    return this.httpClient.post(this.api + "update_" + table + ".php", data);
  }

}
