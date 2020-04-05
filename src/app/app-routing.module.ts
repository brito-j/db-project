import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ReadComponent} from './read/read.component';


const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'read',
    component: ReadComponent
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
