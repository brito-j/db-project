import { Component, OnInit } from '@angular/core';
import {Application} from '../interfaces/application';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-h1b-certified',
  templateUrl: './h1b-certified.component.html',
  styleUrls: ['./h1b-certified.component.css']
})
export class H1bCertifiedComponent implements OnInit {

  data: Application[] = [];
  table: string = "h1b_certified"

  constructor(private apiService: ApiService) { }

  read(): void {
    this.apiService.read(this.table)
      .subscribe((data: Application[]) => { this.data = data })
  }

  ngOnInit(): void { this.read() }

}
