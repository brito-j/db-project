import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {CaseInfo} from '../interfaces/case-info';

@Component({
  selector: 'app-case-info',
  templateUrl: './case-info.component.html',
  styleUrls: ['./case-info.component.css']
})
export class CaseInfoComponent implements OnInit {

  data: CaseInfo[] = [];
  openUpdate: boolean = false;
  openCreate: boolean = false;

  case_number: string = "";
  case_status: string = "";
  case_submitted: string = "";
  decision_date: string = "";
  visa_class: string = "";
  employment_start_date: string = "";
  employment_end_date: string = "";
  original_cert_date: string = "";

  createData: FormData = new FormData();
  updateData: FormData = new FormData();
  deleteData: FormData = new FormData();
  table: string = "case_info";

  constructor(private apiService: ApiService) { }

  onCreate(): void {
    this.openCreate = true;
  }

  create(): void {
    this.createData.append('case_number', this.case_number);
    this.createData.append('case_status', this.case_status);
    this.createData.append('case_submitted', this.case_submitted);
    this.createData.append('decision_date', this.decision_date);
    this.createData.append('visa_class', this.visa_class);
    this.createData.append('employment_start_date', this.employment_start_date);
    this.createData.append('employment_end_date', this.employment_end_date);
    this.createData.append('original_cert_date', this.original_cert_date);
    this.apiService.create(this.createData, this.table).subscribe(() => {
      location.reload()
    });
  }

  read(): void {
    this.apiService.read("case_info")
      .subscribe((data: CaseInfo[]) => { this.data = data })
  }

  onUpdate(datum): void {
    this.openUpdate = true;
    this.case_number = datum.case_number;
  }

  update(): void {
    this.updateData.append('case_number', this.case_number);
    this.updateData.append('case_status', this.case_status);
    this.updateData.append('case_submitted', this.case_submitted);
    this.updateData.append('decision_date', this.decision_date);
    this.updateData.append('visa_class', this.visa_class);
    this.updateData.append('employment_start_date', this.employment_start_date);
    this.updateData.append('employment_end_date', this.employment_end_date);
    this.updateData.append('original_cert_date', this.original_cert_date);
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
