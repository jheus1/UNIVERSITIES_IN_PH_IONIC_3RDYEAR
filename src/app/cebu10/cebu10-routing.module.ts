import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cebu10Page } from './cebu10.page';

const routes: Routes = [
  {
    path: '',
    component: Cebu10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cebu10PageRoutingModule {}
