import { Component, OnInit } from '@angular/core';
import { Application } from '../interfaces/application';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  apps: Application[] = [];

  constructor(private apiService: ApiService) { }

  readMega(): void {
    this.apiService.readMega()
      .subscribe((data: Application[]) => { this.apps = data })
  }

  ngOnInit(): void { this.readMega() }

}
