import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bataan4Page } from './bataan4.page';

const routes: Routes = [
  {
    path: '',
    component: Bataan4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bataan4PageRoutingModule {}
