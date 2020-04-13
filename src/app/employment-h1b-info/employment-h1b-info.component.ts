import { Component, OnInit } from '@angular/core';
import {Application} from '../interfaces/application';
import {ApiService} from '../api.service';
import {EmploymentH1bInfo} from '../interfaces/employment-h1b-info';

@Component({
  selector: 'app-employment-h1b-info',
  templateUrl: './employment-h1b-info.component.html',
  styleUrls: ['./employment-h1b-info.component.css']
})
export class EmploymentH1bInfoComponent implements OnInit {

  data: EmploymentH1bInfo[] = [];
  selected: EmploymentH1bInfo[] = [];

  constructor(private apiService: ApiService) { }

  read(): void {
    this.apiService.read("employment_h1b_info")
      .subscribe((data: EmploymentH1bInfo[]) => { this.data = data })
  }

  ngOnInit(): void { this.read() }

}
