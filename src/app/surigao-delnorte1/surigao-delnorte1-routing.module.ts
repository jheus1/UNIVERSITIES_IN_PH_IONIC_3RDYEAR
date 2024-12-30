import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurigaoDelnorte1Page } from './surigao-delnorte1.page';

const routes: Routes = [
  {
    path: '',
    component: SurigaoDelnorte1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurigaoDelnorte1PageRoutingModule {}
