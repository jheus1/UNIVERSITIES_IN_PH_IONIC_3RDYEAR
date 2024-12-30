import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cebu9Page } from './cebu9.page';

const routes: Routes = [
  {
    path: '',
    component: Cebu9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cebu9PageRoutingModule {}
