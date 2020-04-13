import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {AgentInfo} from '../interfaces/agent-info';

@Component({
  selector: 'app-agent-info',
  templateUrl: './agent-info.component.html',
  styleUrls: ['./agent-info.component.css']
})
export class AgentInfoComponent implements OnInit {

  data: AgentInfo[] = [];
  open: boolean = false;

  case_number: string = "";
  agent_representing_employer: string = "";
  agent_employer_name: string = "";
  agent_employer_city: string = "";
  agent_employer_state: string = "";

  updateData: FormData = new FormData();
  deleteData: FormData = new FormData();
  table: string = "agent_info";

  constructor(private apiService: ApiService) { }

  read(): void {
    this.apiService.read(this.table)
      .subscribe((data: AgentInfo[]) => { this.data = data })
  }

  onUpdate(datum): void {
    this.open = true;
    this.case_number = datum.case_number;
  }

  update(): void {
    this.updateData.append('case_number', this.case_number);
    this.updateData.append('agent_representing_employer', this.agent_representing_employer);
    this.updateData.append('agent_attorney_name', this.agent_employer_name);
    this.updateData.append('agent_attorney_city', this.agent_employer_city);
    this.updateData.append('agent_attorney_state', this.agent_employer_state);
    this.apiService.update(this.updateData, this.table).subscribe(() => {
      location.reload()
    });
  }

  delete(datum): void {
    this.case_number = datum.case_number;
    this.deleteData.append('table', this.table);
    this.deleteData.append('case_number', this.case_number);
    this.apiService.delete(this.deleteData).subscribe(() => {location.reload()})
  }

  ngOnInit(): void { this.read() }

}
