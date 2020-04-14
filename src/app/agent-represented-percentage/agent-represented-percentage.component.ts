import { Component, OnInit } from '@angular/core';
import {Application} from '../interfaces/application';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-agent-represented-percentage',
  templateUrl: './agent-represented-percentage.component.html',
  styleUrls: ['./agent-represented-percentage.component.css']
})
export class AgentRepresentedPercentageComponent implements OnInit {

  loading: boolean = true;
  data: Application[] = [];
  table: string = "agent_represented_percentage"

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
