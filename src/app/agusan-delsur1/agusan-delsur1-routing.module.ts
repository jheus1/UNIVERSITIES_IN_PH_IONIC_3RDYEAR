import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgusanDelsur1Page } from './agusan-delsur1.page';

const routes: Routes = [
  {
    path: '',
    component: AgusanDelsur1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgusanDelsur1PageRoutingModule {}
