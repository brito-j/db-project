import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api = "http://localhost/db-project/h1b/";
  apiMega = "http://localhost/db-project/h1b_mega/";

  constructor(private httpClient: HttpClient) { }

  create(data, table): any {
    return this.httpClient.post(this.api + "create_" + table + ".php", data);
  }

  read(table): any {
    return this.httpClient.get(this.api + "read.php?table=" + table);
  }

  readAnalytics(table): any {
    return this.httpClient.get(this.api + "read_analytics.php?table=" + table);
  }

  readMega(): any {
    return this.httpClient.get(this.apiMega + "read.php");
  }

  update(data, table): any {
    return this.httpClient.post(this.api + "update_" + table + ".php", data);
  }

  delete(data): any {
    return this.httpClient.post(this.api + "delete.php", data);
  }
}
