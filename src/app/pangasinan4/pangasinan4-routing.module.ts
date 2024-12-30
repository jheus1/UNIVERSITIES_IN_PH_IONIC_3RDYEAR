import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pangasinan4Page } from './pangasinan4.page';

const routes: Routes = [
  {
    path: '',
    component: Pangasinan4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pangasinan4PageRoutingModule {}
