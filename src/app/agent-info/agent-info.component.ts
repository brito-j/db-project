import { Component, OnInit } from '@angular/core';
import {Application} from '../interfaces/application';
import {ApiService} from '../api.service';
import {AgentInfo} from '../interfaces/agent-info';

@Component({
  selector: 'app-agent-info',
  templateUrl: './agent-info.component.html',
  styleUrls: ['./agent-info.component.css']
})
export class AgentInfoComponent implements OnInit {

  data: AgentInfo[] = [];
  selected: AgentInfo[] = []

  constructor(private apiService: ApiService) { }

  read(): void {
    this.apiService.read("agent_info")
      .subscribe((data: AgentInfo[]) => { this.data = data })
  }

  ngOnInit(): void { this.read() }

}
