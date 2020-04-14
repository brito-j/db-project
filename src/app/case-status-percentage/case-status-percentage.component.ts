import { Component, OnInit } from '@angular/core';
import {Application} from '../interfaces/application';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-case-status-percentage',
  templateUrl: './case-status-percentage.component.html',
  styleUrls: ['./case-status-percentage.component.css']
})
export class CaseStatusPercentageComponent implements OnInit {

  data: Application[] = [];
  table: string = "case_status_percentage"

  constructor(private apiService: ApiService) { }

  readAnalytics(): void {
    this.apiService.readAnalytics(this.table)
      .subscribe((data: Application[]) => { this.data = data })
  }

  ngOnInit(): void { this.readAnalytics() }

}
