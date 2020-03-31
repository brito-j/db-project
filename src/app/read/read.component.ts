import { Component, OnInit } from '@angular/core';
import { Application } from '../interfaces/application';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  app: Application = {
    case_number: "1",
    case_status: "1",
    case_submitted: "1",
    decision_date: "1",
    visa_class: "1",
    employment_start_date: "1",
    employment_end_date: "1",
    employer_name: "1",
    employer_business_dba: "1",
    employer_address: "1",
    employer_city: "1",
    employer_state: "1",
    employer_postal_code: "1",
    employer_country: "1",
    employer_province: "1",
    employer_phone: "1",
    employer_phone_ext: "1",
    agent_representing_employer: "1",
    agent_attorney_name: "1",
    agent_attorney_city: "1",
    agent_attorney_state: "1",
    job_title: "1",
    soc_code: "1",
    soc_name: "1",
    naics_code: "1",
    total_workers: "1",
    new_employment: "1",
    continued_employment: "1",
    change_previous_employment: "1",
    new_concurrent_employment: "1",
    change_employer: "1",
    amended_petition: "1",
    full_time_position: "1",
    prevailing_wage: "1",
    pw_unit_of_pay: "1",
    pw_wage_level: "1",
    pw_source: "1",
    pw_source_year: "1",
    pw_source_other: "1",
    wage_rate_of_pay_from: "1",
    wage_rate_of_pay_to: "1",
    wage_unit_of_pay: "1",
    h1b_dependent: "1",
    willful_violator: "1",
    support_h1b: "1",
    labor_con_agree: "1",
    public_disclosure_location: "1",
    worksite_city: "1",
    worksite_county: "1",
    worksite_state: "1",
    worksite_postal_code: "1",
    original_cert_date: "1"
  };
  apps: any = [];

  constructor() { let x = 0; while (x < 25) { this.apps.push(this.app); x++; } }

  ngOnInit(): void {
  }

}
