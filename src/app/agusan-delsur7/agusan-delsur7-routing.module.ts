import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgusanDelsur7Page } from './agusan-delsur7.page';

const routes: Routes = [
  {
    path: '',
    component: AgusanDelsur7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgusanDelsur7PageRoutingModule {}
