import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgusanDelsur9Page } from './agusan-delsur9.page';

const routes: Routes = [
  {
    path: '',
    component: AgusanDelsur9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgusanDelsur9PageRoutingModule {}
