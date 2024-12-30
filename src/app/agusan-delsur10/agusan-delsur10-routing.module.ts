import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgusanDelsur10Page } from './agusan-delsur10.page';

const routes: Routes = [
  {
    path: '',
    component: AgusanDelsur10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgusanDelsur10PageRoutingModule {}
