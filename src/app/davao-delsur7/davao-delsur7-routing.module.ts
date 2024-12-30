import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DavaoDelsur7Page } from './davao-delsur7.page';

const routes: Routes = [
  {
    path: '',
    component: DavaoDelsur7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DavaoDelsur7PageRoutingModule {}
