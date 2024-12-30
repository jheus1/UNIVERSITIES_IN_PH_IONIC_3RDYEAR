import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Rizal7Page } from './rizal7.page';

const routes: Routes = [
  {
    path: '',
    component: Rizal7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Rizal7PageRoutingModule {}
