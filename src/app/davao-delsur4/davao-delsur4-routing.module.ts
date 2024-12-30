import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DavaoDelsur4Page } from './davao-delsur4.page';

const routes: Routes = [
  {
    path: '',
    component: DavaoDelsur4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DavaoDelsur4PageRoutingModule {}
