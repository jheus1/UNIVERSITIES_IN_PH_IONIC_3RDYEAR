import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pangasinan2Page } from './pangasinan2.page';

const routes: Routes = [
  {
    path: '',
    component: Pangasinan2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pangasinan2PageRoutingModule {}
