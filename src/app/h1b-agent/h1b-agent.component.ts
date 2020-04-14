import { Component, OnInit } from '@angular/core';
import {Application} from '../interfaces/application';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-h1b-agent',
  templateUrl: './h1b-agent.component.html',
  styleUrls: ['./h1b-agent.component.css']
})
export class H1bAgentComponent implements OnInit {

  loading: boolean = true;
  data: Application[] = [];
  table: string = "h1b_agent"

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
