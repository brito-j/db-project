import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api = "http://127.0.0.1:80";

  constructor(private httpClient: HttpClient) { }

  load(): any {
    return this.httpClient.get("http://localhost/db-project/test.php");
  }
}
