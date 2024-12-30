import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pangasinan10Page } from './pangasinan10.page';

const routes: Routes = [
  {
    path: '',
    component: Pangasinan10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pangasinan10PageRoutingModule {}
