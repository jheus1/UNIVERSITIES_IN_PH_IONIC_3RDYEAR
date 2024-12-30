import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DavaoDelsur3Page } from './davao-delsur3.page';

const routes: Routes = [
  {
    path: '',
    component: DavaoDelsur3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DavaoDelsur3PageRoutingModule {}
