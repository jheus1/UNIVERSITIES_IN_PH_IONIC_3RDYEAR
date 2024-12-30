import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cebu2Page } from './cebu2.page';

const routes: Routes = [
  {
    path: '',
    component: Cebu2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cebu2PageRoutingModule {}
