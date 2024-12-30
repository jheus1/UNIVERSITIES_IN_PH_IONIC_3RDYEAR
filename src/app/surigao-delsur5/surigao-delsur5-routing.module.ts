import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurigaoDelsur5Page } from './surigao-delsur5.page';

const routes: Routes = [
  {
    path: '',
    component: SurigaoDelsur5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurigaoDelsur5PageRoutingModule {}
