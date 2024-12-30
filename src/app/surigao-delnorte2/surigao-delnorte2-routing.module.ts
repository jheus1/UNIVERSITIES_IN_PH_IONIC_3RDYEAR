import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurigaoDelnorte2Page } from './surigao-delnorte2.page';

const routes: Routes = [
  {
    path: '',
    component: SurigaoDelnorte2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurigaoDelnorte2PageRoutingModule {}
