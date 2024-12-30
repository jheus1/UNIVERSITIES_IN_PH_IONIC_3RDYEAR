import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurigaoDelsur7Page } from './surigao-delsur7.page';

const routes: Routes = [
  {
    path: '',
    component: SurigaoDelsur7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurigaoDelsur7PageRoutingModule {}
