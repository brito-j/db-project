import { Component, OnInit } from '@angular/core';
import {Application} from '../interfaces/application';
import {ApiService} from '../api.service';
import {Wages} from '../interfaces/wages';

@Component({
  selector: 'app-wages',
  templateUrl: './wages.component.html',
  styleUrls: ['./wages.component.css']
})
export class WagesComponent implements OnInit {

  data: Wages[] = [];
  selected: Wages[] = [];

  constructor(private apiService: ApiService) { }

  read(): void {
    this.apiService.read("wages")
      .subscribe((data: Wages[]) => { console.log(data);this.data = data })
  }

  ngOnInit(): void { this.read() }

}
