import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cebu3Page } from './cebu3.page';

const routes: Routes = [
  {
    path: '',
    component: Cebu3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cebu3PageRoutingModule {}
