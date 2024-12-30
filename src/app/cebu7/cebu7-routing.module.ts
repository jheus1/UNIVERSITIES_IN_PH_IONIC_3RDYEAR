import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cebu7Page } from './cebu7.page';

const routes: Routes = [
  {
    path: '',
    component: Cebu7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cebu7PageRoutingModule {}
