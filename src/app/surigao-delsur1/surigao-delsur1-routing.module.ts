import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurigaoDelsur1Page } from './surigao-delsur1.page';

const routes: Routes = [
  {
    path: '',
    component: SurigaoDelsur1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurigaoDelsur1PageRoutingModule {}
