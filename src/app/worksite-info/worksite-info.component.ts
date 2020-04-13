import { Component, OnInit } from '@angular/core';
import {Application} from '../interfaces/application';
import {ApiService} from '../api.service';
import {WorksiteInfo} from '../interfaces/worksite-info';

@Component({
  selector: 'app-worksite-info',
  templateUrl: './worksite-info.component.html',
  styleUrls: ['./worksite-info.component.css']
})
export class WorksiteInfoComponent implements OnInit {

  data: WorksiteInfo[] = [];
  selected: WorksiteInfo[] = [];

  constructor(private apiService: ApiService) { }

  read(): void {
    this.apiService.read("worksite_info")
      .subscribe((data: WorksiteInfo[]) => { this.data = data })
  }

  ngOnInit(): void { this.read() }

}
