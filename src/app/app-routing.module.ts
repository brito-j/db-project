import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ReadComponent} from './read/read.component';
import {AboutDataComponent} from './about-data/about-data.component';
import {AgentInfoComponent} from './agent-info/agent-info.component';
import {CaseInfoComponent} from './case-info/case-info.component';
import {EmployerAuditComponent} from './employer-audit/employer-audit.component';
import {EmployerInfoComponent} from './employer-info/employer-info.component';
import {EmploymentH1bInfoComponent} from './employment-h1b-info/employment-h1b-info.component';
import {EmploymentInfoComponent} from './employment-info/employment-info.component';
import {JobDescriptionComponent} from './job-description/job-description.component';
import {WagesComponent} from './wages/wages.component';
import {WorksiteInfoComponent} from './worksite-info/worksite-info.component';
import {H1bPublicDataComponent} from './h1b-public-data/h1b-public-data.component';
import {H1bCertifiedComponent} from './h1b-certified/h1b-certified.component';
import {H1bAgentComponent} from './h1b-agent/h1b-agent.component';
import {CaseStatusPercentageComponent} from './case-status-percentage/case-status-percentage.component';
import {VisaClassCountComponent} from './visa-class-count/visa-class-count.component';
import {AgentRepresentedPercentageComponent} from './agent-represented-percentage/agent-represented-percentage.component';
import {SocNameCountComponent} from './soc-name-count/soc-name-count.component';
import {H1bDependentPercentageComponent} from './h1b-dependent-percentage/h1b-dependent-percentage.component';
import {AverageWageComponent} from './average-wage/average-wage.component';


const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'read',
    component: ReadComponent
  },
  {
    path: 'about-data',
    component: AboutDataComponent
  },
  {
    path: 'agent-info',
    component: AgentInfoComponent
  },
  {
    path: 'case-info',
    component: CaseInfoComponent
  },
  {
    path: 'employer-audit',
    component: EmployerAuditComponent
  },
  {
    path: 'employer-info',
    component: EmployerInfoComponent
  },
  {
    path: 'employment-h1b-info',
    component: EmploymentH1bInfoComponent
  },
  {
    path: 'employment-info',
    component: EmploymentInfoComponent
  },
  {
    path: 'job-description',
    component: JobDescriptionComponent
  },
  {
    path: 'wages',
    component: WagesComponent
  },
  {
    path: 'worksite-info',
    component: WorksiteInfoComponent
  },
  {
    path: 'h1b-public-data',
    component: H1bPublicDataComponent
  },
  {
    path: 'h1b-certified',
    component: H1bCertifiedComponent
  },
  {
    path: 'h1b-agent',
    component: H1bAgentComponent
  },
  {
    path: 'case-status-percentage',
    component: CaseStatusPercentageComponent
  },
  {
    path: 'visa-class-count',
    component: VisaClassCountComponent
  },
  {
    path: 'agent-represented-percentage',
    component: AgentRepresentedPercentageComponent
  },
  {
    path: 'soc-name-count',
    component: SocNameCountComponent
  },
  {
    path: 'h1b-dependent-percentage',
    component: H1bDependentPercentageComponent
  },
  {
    path: 'average-wage',
    component: AverageWageComponent
  },
  { path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  },
  { path: '**',
    redirectTo: '/about'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
