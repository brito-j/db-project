import { Component, OnInit } from '@angular/core';
import {Application} from '../interfaces/application';
import {ApiService} from '../api.service';
import {EmployerInfo} from '../interfaces/employer-info';

@Component({
  selector: 'app-employer-info',
  templateUrl: './employer-info.component.html',
  styleUrls: ['./employer-info.component.css']
})
export class EmployerInfoComponent implements OnInit {

  data: EmployerInfo[] = [];
  selected: EmployerInfo[] = [];

  constructor(private apiService: ApiService) { }

  read(): void {
    this.apiService.read("employer_info")
      .subscribe((data: EmployerInfo[]) => { this.data = data })
  }

  ngOnInit(): void { this.read() }

}
