import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DavaoDelsur5Page } from './davao-delsur5.page';

const routes: Routes = [
  {
    path: '',
    component: DavaoDelsur5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DavaoDelsur5PageRoutingModule {}
