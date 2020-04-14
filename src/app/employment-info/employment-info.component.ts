import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {EmploymentInfo} from '../interfaces/employment-info';

@Component({
  selector: 'app-employment-info',
  templateUrl: './employment-info.component.html',
  styleUrls: ['./employment-info.component.css']
})
export class EmploymentInfoComponent implements OnInit {

  loading: boolean = true;
  data: EmploymentInfo[] = [];
  openUpdate: boolean = false;
  openCreate: boolean = false;

  case_number: string = "";
  total_workers: string = "";
  new_employment: string = "";
  continued_employment: string = "";
  change_previous_employment: string = "";
  new_concurrent_employment: string = "";
  change_employer: string = "";
  amended_petition: string = "";
  full_time_position: string = "";

  createData: FormData = new FormData();
  updateData: FormData = new FormData();
  deleteData: FormData = new FormData();
  table: string = "employment_info";

  constructor(private apiService: ApiService) { }

  onCreate(): void {
    this.clear();
    this.openCreate = true;
  }

  create(): void {
    this.createData.append('case_number', this.case_number);
    this.createData.append('total_workers', this.total_workers);
    this.createData.append('new_employment', this.new_employment);
    this.createData.append('continued_employment', this.continued_employment);
    this.createData.append('change_previous_employment', this.change_previous_employment);
    this.createData.append('new_concurrent_employment', this.change_previous_employment);
    this.createData.append('change_employer', this.change_previous_employment);
    this.createData.append('amended_petition', this.change_previous_employment);
    this.createData.append('full_time_position', this.change_previous_employment);
    this.apiService.create(this.createData, this.table).subscribe(() => {
      location.reload()
    });
  }

  read(): void {
    this.apiService.read(this.table)
      .subscribe((data: EmploymentInfo[]) => {
        this.data = data;
        this.loading = false;
      })
  }

  onUpdate(datum): void {
    this.clear();
    this.openUpdate = true;
    this.case_number = datum.case_number;
  }

  update(): void {
    this.updateData.append('case_number', this.case_number);
    this.updateData.append('total_workers', this.total_workers);
    this.updateData.append('new_employment', this.new_employment);
    this.updateData.append('continued_employment', this.continued_employment);
    this.updateData.append('change_previous_employment', this.change_previous_employment);
    this.updateData.append('new_concurrent_employment', this.change_previous_employment);
    this.updateData.append('change_employer', this.change_previous_employment);
    this.updateData.append('amended_petition', this.change_previous_employment);
    this.updateData.append('full_time_position', this.change_previous_employment);
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
    this.total_workers = "";
    this.new_employment = "";
    this.continued_employment = "";
    this.change_previous_employment = "";
    this.new_concurrent_employment = "";
    this.change_employer = "";
    this.amended_petition = "";
    this.full_time_position = "";
  }

  ngOnInit(): void { this.read() }

}
