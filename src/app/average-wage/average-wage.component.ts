import { Component, OnInit } from '@angular/core';
import {Application} from '../interfaces/application';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-average-wage',
  templateUrl: './average-wage.component.html',
  styleUrls: ['./average-wage.component.css']
})
export class AverageWageComponent implements OnInit {

  data: Application[] = [];
  table: string = "average_wage"

  constructor(private apiService: ApiService) { }

  readAnalytics(): void {
    this.apiService.readAnalytics(this.table)
      .subscribe((data: Application[]) => { this.data = data })
  }

  ngOnInit(): void { this.readAnalytics() }

}
