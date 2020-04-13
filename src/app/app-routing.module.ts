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
