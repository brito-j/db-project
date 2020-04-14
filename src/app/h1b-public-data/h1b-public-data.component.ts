import { Component, OnInit } from '@angular/core';
import {Application} from '../interfaces/application';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-h1b-public-data',
  templateUrl: './h1b-public-data.component.html',
  styleUrls: ['./h1b-public-data.component.css']
})
export class H1bPublicDataComponent implements OnInit {

  loading: boolean = true;
  data: Application[] = [];
  table: string = "h1b_public_data"

  constructor(private apiService: ApiService) { }

  read(): void {
    this.apiService.read(this.table)
      .subscribe((data: Application[]) => {
        this.data = data;
        this.loading = false;
      })
  }

  ngOnInit(): void { this.read() }

}
