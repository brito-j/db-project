import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {WorksiteInfo} from '../interfaces/worksite-info';

@Component({
  selector: 'app-worksite-info',
  templateUrl: './worksite-info.component.html',
  styleUrls: ['./worksite-info.component.css']
})
export class WorksiteInfoComponent implements OnInit {

  loading: boolean = true;
  data: WorksiteInfo[] = [];
  openUpdate: boolean = false;
  openCreate: boolean = false;

  case_number: string = "";
  public_disclosure_location: string = "";
  worksite_city: string = "";
  worksite_county: string = "";
  worksite_state: string = "";
  worksite_postal_code: string = "";

  createData: FormData = new FormData();
  updateData: FormData = new FormData();
  deleteData: FormData = new FormData();
  table: string = "worksite_info";

  constructor(private apiService: ApiService) { }

  onCreate(): void {
    this.clear();
    this.openCreate = true;
  }

  create(): void {
    this.createData.append('case_number', this.case_number);
    this.createData.append('public_disclosure_location', this.public_disclosure_location);
    this.createData.append('worksite_city', this.worksite_city);
    this.createData.append('worksite_county', this.worksite_county);
    this.createData.append('worksite_state', this.worksite_state);
    this.createData.append('worksite_postal_code', this.worksite_postal_code);
    this.apiService.create(this.createData, this.table).subscribe(() => {
      location.reload()
    });
  }

  read(): void {
    this.apiService.read(this.table)
      .subscribe((data: WorksiteInfo[]) => {
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
    this.updateData.append('public_disclosure_location', this.public_disclosure_location);
    this.updateData.append('worksite_city', this.worksite_city);
    this.updateData.append('worksite_county', this.worksite_county);
    this.updateData.append('worksite_state', this.worksite_state);
    this.updateData.append('worksite_postal_code', this.worksite_postal_code);
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
    this.public_disclosure_location = "";
    this.worksite_city = "";
    this.worksite_county = "";
    this.worksite_state = "";
    this.worksite_postal_code = "";
  }

  ngOnInit(): void { this.read() }

}
