import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {EmployerInfo} from '../interfaces/employer-info';

@Component({
  selector: 'app-employer-info',
  templateUrl: './employer-info.component.html',
  styleUrls: ['./employer-info.component.css']
})
export class EmployerInfoComponent implements OnInit {

  data: EmployerInfo[] = [];
  openUpdate: boolean = false;
  openCreate: boolean = false;

  case_number: string = "";
  employer_name: string = "";
  employer_business_dba: string = "";
  employer_address: string = "";
  employer_city: string = "";
  employer_state: string = "";
  employer_postal_code: string = "";
  employer_country: string = "";
  employer_province: string = "";
  employer_phone: string = "";
  employer_phone_ext: string = "";

  createData: FormData = new FormData();
  updateData: FormData = new FormData();
  deleteData: FormData = new FormData();
  table: string = "employer_info";

  constructor(private apiService: ApiService) { }

  onCreate(): void {
    this.clear();
    this.openCreate = true;
  }

  create(): void {
    this.createData.append('case_number', this.case_number);
    this.createData.append('employer_name', this.employer_name);
    this.createData.append('employer_business_dba', this.employer_business_dba);
    this.createData.append('employer_address', this.employer_address);
    this.createData.append('employer_city', this.employer_city);
    this.createData.append('employer_state', this.employer_state);
    this.createData.append('employer_postal_code', this.employer_postal_code);
    this.createData.append('employer_country', this.employer_country);
    this.createData.append('employer_province', this.employer_province);
    this.createData.append('employer_phone', this.employer_phone);
    this.createData.append('employer_phone_ext', this.employer_phone_ext);
    this.apiService.create(this.createData, this.table).subscribe(() => {
      location.reload()
    });
  }

  read(): void {
    this.apiService.read("employer_info")
      .subscribe((data: EmployerInfo[]) => { this.data = data })
  }

  onUpdate(datum): void {
    this.clear();
    this.openUpdate = true;
    this.case_number = datum.case_number;
  }

  update(): void {
    this.updateData.append('case_number', this.case_number);
    this.updateData.append('employer_name', this.employer_name);
    this.updateData.append('employer_business_dba', this.employer_business_dba);
    this.updateData.append('employer_address', this.employer_address);
    this.updateData.append('employer_city', this.employer_city);
    this.updateData.append('employer_state', this.employer_state);
    this.updateData.append('employer_postal_code', this.employer_postal_code);
    this.updateData.append('employer_country', this.employer_country);
    this.updateData.append('employer_province', this.employer_province);
    this.updateData.append('employer_phone', this.employer_phone);
    this.updateData.append('employer_phone_ext', this.employer_phone_ext);
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
    this.employer_name = "";
    this.employer_business_dba = "";
    this.employer_address = "";
    this.employer_city = "";
    this.employer_state = "";
    this.employer_postal_code = "";
    this.employer_country = "";
    this.employer_province = "";
    this.employer_phone = "";
    this.employer_phone_ext = "";
  }

  ngOnInit(): void { this.read() }

}
