import { Component, OnInit } from '@angular/core';
import {Application} from '../interfaces/application';
import {ApiService} from '../api.service';
import {EmployerAudit} from '../interfaces/employer-audit';

@Component({
  selector: 'app-employer-audit',
  templateUrl: './employer-audit.component.html',
  styleUrls: ['./employer-audit.component.css']
})
export class EmployerAuditComponent implements OnInit {

  data: EmployerAudit[] = [];
  selected: EmployerAudit[] = [];

  constructor(private apiService: ApiService) { }

  read(): void {
    this.apiService.read("employer_audit")
      .subscribe((data: EmployerAudit[]) => { this.data = data })
  }

  ngOnInit(): void { this.read() }

}
