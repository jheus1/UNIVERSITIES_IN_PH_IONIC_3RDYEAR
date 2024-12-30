import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurigaoDelsur10Page } from './surigao-delsur10.page';

const routes: Routes = [
  {
    path: '',
    component: SurigaoDelsur10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurigaoDelsur10PageRoutingModule {}
