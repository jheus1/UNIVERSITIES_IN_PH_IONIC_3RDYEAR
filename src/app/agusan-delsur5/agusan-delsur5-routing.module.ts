import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgusanDelsur5Page } from './agusan-delsur5.page';

const routes: Routes = [
  {
    path: '',
    component: AgusanDelsur5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgusanDelsur5PageRoutingModule {}
