import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DavaoDelsur6Page } from './davao-delsur6.page';

const routes: Routes = [
  {
    path: '',
    component: DavaoDelsur6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DavaoDelsur6PageRoutingModule {}
