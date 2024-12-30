import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurigaoDelnorte8Page } from './surigao-delnorte8.page';

const routes: Routes = [
  {
    path: '',
    component: SurigaoDelnorte8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurigaoDelnorte8PageRoutingModule {}
