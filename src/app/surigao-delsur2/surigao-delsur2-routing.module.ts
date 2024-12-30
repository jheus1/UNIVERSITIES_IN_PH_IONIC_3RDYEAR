import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurigaoDelsur2Page } from './surigao-delsur2.page';

const routes: Routes = [
  {
    path: '',
    component: SurigaoDelsur2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurigaoDelsur2PageRoutingModule {}
