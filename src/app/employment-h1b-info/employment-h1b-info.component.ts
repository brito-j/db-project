import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {EmploymentH1bInfo} from '../interfaces/employment-h1b-info';

@Component({
  selector: 'app-employment-h1b-info',
  templateUrl: './employment-h1b-info.component.html',
  styleUrls: ['./employment-h1b-info.component.css']
})
export class EmploymentH1bInfoComponent implements OnInit {

  data: EmploymentH1bInfo[] = [];
  openUpdate: boolean = false;
  openCreate: boolean = false;

  case_number: string = "";
  h1b_dependent: string = "";
  willful_violator: string = "";
  support_h1b: string = "";
  labor_con_agree: string = "";

  createData: FormData = new FormData();
  updateData: FormData = new FormData();
  deleteData: FormData = new FormData();
  table: string = "employment_h1b_info";

  constructor(private apiService: ApiService) { }

  onCreate(): void {
    this.clear();
    this.openCreate = true;
  }

  create(): void {
    this.createData.append('case_number', this.case_number);
    this.createData.append('h1b_dependent', this.h1b_dependent);
    this.createData.append('willful_violator', this.willful_violator);
    this.createData.append('support_h1b', this.support_h1b);
    this.createData.append('labor_con_agree', this.labor_con_agree);
    this.apiService.create(this.createData, this.table).subscribe(() => {
      location.reload()
    });
  }

  read(): void {
    this.apiService.read("employment_h1b_info")
      .subscribe((data: EmploymentH1bInfo[]) => { this.data = data })
  }

  onUpdate(datum): void {
    this.clear();
    this.openUpdate = true;
    this.case_number = datum.case_number;
  }

  update(): void {
    this.updateData.append('case_number', this.case_number);
    this.updateData.append('h1b_dependent', this.h1b_dependent);
    this.updateData.append('willful_violator', this.willful_violator);
    this.updateData.append('support_h1b', this.support_h1b);
    this.updateData.append('labor_con_agree', this.labor_con_agree);
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
    this.h1b_dependent = "";
    this.willful_violator = "";
    this.support_h1b = "";
    this.labor_con_agree = "";
  }

  ngOnInit(): void { this.read() }

}
