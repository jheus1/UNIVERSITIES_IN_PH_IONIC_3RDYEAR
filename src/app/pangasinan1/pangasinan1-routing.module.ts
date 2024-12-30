import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pangasinan1Page } from './pangasinan1.page';

const routes: Routes = [
  {
    path: '',
    component: Pangasinan1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pangasinan1PageRoutingModule {}
