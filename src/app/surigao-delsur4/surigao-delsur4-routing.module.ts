import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurigaoDelsur4Page } from './surigao-delsur4.page';

const routes: Routes = [
  {
    path: '',
    component: SurigaoDelsur4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurigaoDelsur4PageRoutingModule {}
