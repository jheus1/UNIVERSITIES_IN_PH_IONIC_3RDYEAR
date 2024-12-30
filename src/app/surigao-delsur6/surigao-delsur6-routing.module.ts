import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurigaoDelsur6Page } from './surigao-delsur6.page';

const routes: Routes = [
  {
    path: '',
    component: SurigaoDelsur6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurigaoDelsur6PageRoutingModule {}
