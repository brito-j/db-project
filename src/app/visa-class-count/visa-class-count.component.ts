import { Component, OnInit } from '@angular/core';
import {Application} from '../interfaces/application';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-visa-class-count',
  templateUrl: './visa-class-count.component.html',
  styleUrls: ['./visa-class-count.component.css']
})
export class VisaClassCountComponent implements OnInit {

  loading: boolean = true;
  data: Application[] = [];
  table: string = "visa_class_count"

  constructor(private apiService: ApiService) { }

  readAnalytics(): void {
    this.apiService.readAnalytics(this.table)
      .subscribe((data: Application[]) => {
        this.data = data;
        this.loading = false;
      })
  }

  ngOnInit(): void { this.readAnalytics() }

}
