import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cebu4Page } from './cebu4.page';

const routes: Routes = [
  {
    path: '',
    component: Cebu4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cebu4PageRoutingModule {}
