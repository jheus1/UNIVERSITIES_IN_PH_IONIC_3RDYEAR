import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgusanDelnorte1Page } from './agusan-delnorte1.page';

const routes: Routes = [
  {
    path: '',
    component: AgusanDelnorte1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgusanDelnorte1PageRoutingModule {}
