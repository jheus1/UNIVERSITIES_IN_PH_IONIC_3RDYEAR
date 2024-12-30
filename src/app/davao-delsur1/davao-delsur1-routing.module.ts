import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DavaoDelsur1Page } from './davao-delsur1.page';

const routes: Routes = [
  {
    path: '',
    component: DavaoDelsur1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DavaoDelsur1PageRoutingModule {}
