import { Component, OnInit } from '@angular/core';
import { Application } from '../interfaces/application';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  data: Application[] = [];

  constructor(private apiService: ApiService) { }

  readMega(): void {
    this.apiService.readMega()
      .subscribe((data: Application[]) => { this.data = data })
  }

  ngOnInit(): void { this.readMega() }

}
