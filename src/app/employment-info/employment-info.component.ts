import { Component, OnInit } from '@angular/core';
import {Application} from '../interfaces/application';
import {ApiService} from '../api.service';
import {EmploymentInfo} from '../interfaces/employment-info';

@Component({
  selector: 'app-employment-info',
  templateUrl: './employment-info.component.html',
  styleUrls: ['./employment-info.component.css']
})
export class EmploymentInfoComponent implements OnInit {

  data: EmploymentInfo[] = [];
  selected: EmploymentInfo[] = [];

  constructor(private apiService: ApiService) { }

  read(): void {
    this.apiService.read("employment_info")
      .subscribe((data: EmploymentInfo[]) => { this.data = data })
  }

  ngOnInit(): void { this.read() }

}
