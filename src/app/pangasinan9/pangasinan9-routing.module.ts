import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pangasinan9Page } from './pangasinan9.page';

const routes: Routes = [
  {
    path: '',
    component: Pangasinan9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pangasinan9PageRoutingModule {}
