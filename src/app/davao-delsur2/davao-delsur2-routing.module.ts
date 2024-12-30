import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DavaoDelsur2Page } from './davao-delsur2.page';

const routes: Routes = [
  {
    path: '',
    component: DavaoDelsur2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DavaoDelsur2PageRoutingModule {}
