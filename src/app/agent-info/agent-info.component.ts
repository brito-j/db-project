import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {AgentInfo} from '../interfaces/agent-info';

@Component({
  selector: 'app-agent-info',
  templateUrl: './agent-info.component.html',
  styleUrls: ['./agent-info.component.css']
})
export class AgentInfoComponent implements OnInit {

  loading: boolean = true;
  data: AgentInfo[] = [];
  openUpdate: boolean = false;
  openCreate: boolean = false;

  case_number: string = "";
  agent_representing_employer: string = "";
  agent_employer_name: string = "";
  agent_employer_city: string = "";
  agent_employer_state: string = "";

  createData: FormData = new FormData();
  updateData: FormData = new FormData();
  deleteData: FormData = new FormData();
  table: string = "agent_info";

  constructor(private apiService: ApiService) { }

  onCreate(): void {
    this.openCreate = true;
  }

  create(): void {
    this.createData.append('case_number', this.case_number);
    this.createData.append('agent_representing_employer', this.agent_representing_employer);
    this.createData.append('agent_attorney_name', this.agent_employer_name);
    this.createData.append('agent_attorney_city', this.agent_employer_city);
    this.createData.append('agent_attorney_state', this.agent_employer_state);
    this.apiService.create(this.createData, this.table).subscribe(() => {
      location.reload()
    });
  }

  read(): void {
    this.apiService.read(this.table)
      .subscribe((data: AgentInfo[]) => {
        this.data = data;
        this.loading = false;
      })
  }

  onUpdate(datum): void {
    this.openUpdate = true;
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
