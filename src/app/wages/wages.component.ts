import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {Wages} from '../interfaces/wages';

@Component({
  selector: 'app-wages',
  templateUrl: './wages.component.html',
  styleUrls: ['./wages.component.css']
})
export class WagesComponent implements OnInit {

  loading: boolean = true;
  data: Wages[] = [];
  openUpdate: boolean = false;
  openCreate: boolean = false;

  case_number: string = "";
  prevailing_wage: string = "";
  pw_unit_of_pay: string = "";
  pw_wage_level: string = "";
  pw_source: string = "";
  pw_source_year: string = "";
  pw_source_other: string = "";
  wage_rate_of_pay_from: string = "";
  wage_rate_of_pay_to: string = "";
  wage_unit_of_pay: string = "";

  createData: FormData = new FormData();
  updateData: FormData = new FormData();
  deleteData: FormData = new FormData();
  table: string = "wages";

  constructor(private apiService: ApiService) { }

  onCreate(): void {
    this.clear();
    this.openCreate = true;
  }

  create(): void {
    this.createData.append('case_number', this.case_number);
    this.createData.append('prevailing_wage', this.prevailing_wage);
    this.createData.append('pw_unit_of_pay', this.pw_unit_of_pay);
    this.createData.append('pw_wage_level', this.pw_wage_level);
    this.createData.append('pw_source', this.pw_source);
    this.createData.append('pw_source_year', this.pw_source_year);
    this.createData.append('pw_source_other', this.pw_source_other);
    this.createData.append('wage_rate_of_pay_from', this.wage_rate_of_pay_from);
    this.createData.append('wage_rate_of_pay_to', this.wage_rate_of_pay_to);
    this.createData.append('wage_unit_of_pay', this.wage_unit_of_pay);
    this.apiService.create(this.createData, this.table).subscribe(() => {
      location.reload()
    });
  }

  read(): void {
    this.apiService.read(this.table)
      .subscribe((data: Wages[]) => {
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
    this.updateData.append('prevailing_wage', this.prevailing_wage);
    this.updateData.append('pw_unit_of_pay', this.pw_unit_of_pay);
    this.updateData.append('pw_wage_level', this.pw_wage_level);
    this.updateData.append('pw_source', this.pw_source);
    this.updateData.append('pw_source_year', this.pw_source_year);
    this.updateData.append('pw_source_other', this.pw_source_other);
    this.updateData.append('wage_rate_of_pay_from', this.wage_rate_of_pay_from);
    this.updateData.append('wage_rate_of_pay_to', this.wage_rate_of_pay_to);
    this.updateData.append('wage_unit_of_pay', this.wage_unit_of_pay);
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
    this.prevailing_wage = "";
    this.pw_unit_of_pay = "";
    this.pw_wage_level = "";
    this.pw_source = "";
    this.pw_source_year = "";
    this.pw_source_other = "";
    this.wage_rate_of_pay_from = "";
    this.wage_rate_of_pay_to = "";
    this.wage_unit_of_pay = "";
  }

  ngOnInit(): void { this.read() }

}
