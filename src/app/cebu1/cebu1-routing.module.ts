import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cebu1Page } from './cebu1.page';

const routes: Routes = [
  {
    path: '',
    component: Cebu1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cebu1PageRoutingModule {}
