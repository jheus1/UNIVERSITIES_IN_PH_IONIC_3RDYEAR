import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DavaoDelsur8Page } from './davao-delsur8.page';

const routes: Routes = [
  {
    path: '',
    component: DavaoDelsur8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DavaoDelsur8PageRoutingModule {}
