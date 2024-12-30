import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurigaoDelnorte4Page } from './surigao-delnorte4.page';

const routes: Routes = [
  {
    path: '',
    component: SurigaoDelnorte4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurigaoDelnorte4PageRoutingModule {}
