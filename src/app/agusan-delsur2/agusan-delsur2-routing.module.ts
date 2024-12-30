import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgusanDelsur2Page } from './agusan-delsur2.page';

const routes: Routes = [
  {
    path: '',
    component: AgusanDelsur2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgusanDelsur2PageRoutingModule {}
