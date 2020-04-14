import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {JobDescription} from '../interfaces/job-description';

@Component({
  selector: 'app-job-description',
  templateUrl: './job-description.component.html',
  styleUrls: ['./job-description.component.css']
})
export class JobDescriptionComponent implements OnInit {

  data: JobDescription[] = [];
  openUpdate: boolean = false;
  openCreate: boolean = false;

  case_number: string = "";
  job_title: string = "";
  soc_code: string = "";
  soc_name: string = "";
  naics_code: string = "";

  createData: FormData = new FormData();
  updateData: FormData = new FormData();
  deleteData: FormData = new FormData();
  table: string = "job_description";

  constructor(private apiService: ApiService) { }

  onCreate(): void {
    this.clear();
    this.openCreate = true;
  }

  create(): void {
    this.createData.append('case_number', this.case_number);
    this.createData.append('job_title', this.job_title);
    this.createData.append('soc_code', this.soc_code);
    this.createData.append('soc_name', this.soc_name);
    this.createData.append('naics_code', this.naics_code);
    this.apiService.create(this.createData, this.table).subscribe(() => {
      location.reload()
    });
  }

  read(): void {
    this.apiService.read("job_description")
      .subscribe((data: JobDescription[]) => { this.data = data })
  }

  onUpdate(datum): void {
    this.clear();
    this.openUpdate = true;
    this.case_number = datum.case_number;
  }

  update(): void {
    this.updateData.append('case_number', this.case_number);
    this.updateData.append('job_title', this.job_title);
    this.updateData.append('soc_code', this.soc_code);
    this.updateData.append('soc_name', this.soc_name);
    this.updateData.append('naics_code', this.naics_code);
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

  clear(): void {
    this.case_number = "";
    this.job_title = "";
    this.soc_code = "";
    this.soc_name = "";
    this.naics_code = "";
  }

  ngOnInit(): void { this.read() }

}
