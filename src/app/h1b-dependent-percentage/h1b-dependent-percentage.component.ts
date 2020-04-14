import { Component, OnInit } from '@angular/core';
import {Application} from '../interfaces/application';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-h1b-dependent-percentage',
  templateUrl: './h1b-dependent-percentage.component.html',
  styleUrls: ['./h1b-dependent-percentage.component.css']
})
export class H1bDependentPercentageComponent implements OnInit {

  loading: boolean = true;
  data: Application[] = [];
  table: string = "h1b_dependent_percentage"

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
