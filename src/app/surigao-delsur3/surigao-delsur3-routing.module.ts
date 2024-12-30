import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurigaoDelsur3Page } from './surigao-delsur3.page';

const routes: Routes = [
  {
    path: '',
    component: SurigaoDelsur3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurigaoDelsur3PageRoutingModule {}
