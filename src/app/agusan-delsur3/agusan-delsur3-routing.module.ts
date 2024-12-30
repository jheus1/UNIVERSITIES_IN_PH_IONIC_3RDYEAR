import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgusanDelsur3Page } from './agusan-delsur3.page';

const routes: Routes = [
  {
    path: '',
    component: AgusanDelsur3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgusanDelsur3PageRoutingModule {}
