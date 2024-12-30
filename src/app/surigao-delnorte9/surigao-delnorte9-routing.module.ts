import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurigaoDelnorte9Page } from './surigao-delnorte9.page';

const routes: Routes = [
  {
    path: '',
    component: SurigaoDelnorte9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurigaoDelnorte9PageRoutingModule {}
