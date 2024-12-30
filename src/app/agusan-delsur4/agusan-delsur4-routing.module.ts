import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgusanDelsur4Page } from './agusan-delsur4.page';

const routes: Routes = [
  {
    path: '',
    component: AgusanDelsur4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgusanDelsur4PageRoutingModule {}
