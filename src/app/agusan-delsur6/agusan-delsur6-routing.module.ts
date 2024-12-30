import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgusanDelsur6Page } from './agusan-delsur6.page';

const routes: Routes = [
  {
    path: '',
    component: AgusanDelsur6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgusanDelsur6PageRoutingModule {}
