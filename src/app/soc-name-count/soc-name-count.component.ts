import { Component, OnInit } from '@angular/core';
import {Application} from '../interfaces/application';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-soc-name-count',
  templateUrl: './soc-name-count.component.html',
  styleUrls: ['./soc-name-count.component.css']
})
export class SocNameCountComponent implements OnInit {

  loading: boolean = true;
  data: Application[] = [];
  table: string = "soc_name_count"

  constructor(private apiService: ApiService) { }

  readAnalytics(): void {
    this.apiService.readAnalytics(this.table)
      .subscribe((data: Application[]) => {
        this.data = data;
        this.loading = false;
      })
  }

  ngOnInit(): void { this.readAnalytics() }

}
