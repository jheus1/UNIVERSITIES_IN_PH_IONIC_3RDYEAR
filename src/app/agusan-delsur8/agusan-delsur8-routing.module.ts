import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgusanDelsur8Page } from './agusan-delsur8.page';

const routes: Routes = [
  {
    path: '',
    component: AgusanDelsur8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgusanDelsur8PageRoutingModule {}
