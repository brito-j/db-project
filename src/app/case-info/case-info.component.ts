import { Component, OnInit } from '@angular/core';
import {Application} from '../interfaces/application';
import {ApiService} from '../api.service';
import {CaseInfo} from '../interfaces/case-info';

@Component({
  selector: 'app-case-info',
  templateUrl: './case-info.component.html',
  styleUrls: ['./case-info.component.css']
})
export class CaseInfoComponent implements OnInit {

  data: CaseInfo[] = [];
  selected: CaseInfo[] = []

  constructor(private apiService: ApiService) { }

  read(): void {
    this.apiService.read("case_info")
      .subscribe((data: CaseInfo[]) => { this.data = data })
  }

  ngOnInit(): void { this.read() }

}
