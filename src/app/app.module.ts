import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { ReadComponent } from './read/read.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AboutDataComponent } from './about-data/about-data.component';
import { AgentInfoComponent } from './agent-info/agent-info.component';
import { CaseInfoComponent } from './case-info/case-info.component';
import { EmployerAuditComponent } from './employer-audit/employer-audit.component';
import { EmployerInfoComponent } from './employer-info/employer-info.component';
import { EmploymentH1bInfoComponent } from './employment-h1b-info/employment-h1b-info.component';
import { EmploymentInfoComponent } from './employment-info/employment-info.component';
import { JobDescriptionComponent } from './job-description/job-description.component';
import { WagesComponent } from './wages/wages.component';
import { WorksiteInfoComponent } from './worksite-info/worksite-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReadComponent,
    AboutComponent,
    SidenavComponent,
    AboutDataComponent,
    AgentInfoComponent,
    CaseInfoComponent,
    EmployerAuditComponent,
    EmployerInfoComponent,
    EmploymentH1bInfoComponent,
    EmploymentInfoComponent,
    JobDescriptionComponent,
    WagesComponent,
    WorksiteInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
