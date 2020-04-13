import { Component, OnInit } from '@angular/core';
import {Application} from '../interfaces/application';
import {ApiService} from '../api.service';
import {JobDescription} from '../interfaces/job-description';

@Component({
  selector: 'app-job-description',
  templateUrl: './job-description.component.html',
  styleUrls: ['./job-description.component.css']
})
export class JobDescriptionComponent implements OnInit {

  data: JobDescription[] = [];
  selected: JobDescription[] = [];

  constructor(private apiService: ApiService) { }

  read(): void {
    this.apiService.read("job_description")
      .subscribe((data: JobDescription[]) => { this.data = data })
  }

  ngOnInit(): void { this.read() }

}
