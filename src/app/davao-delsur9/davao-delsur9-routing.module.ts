import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DavaoDelsur9Page } from './davao-delsur9.page';

const routes: Routes = [
  {
    path: '',
    component: DavaoDelsur9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DavaoDelsur9PageRoutingModule {}
