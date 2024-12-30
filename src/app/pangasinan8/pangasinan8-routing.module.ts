import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pangasinan8Page } from './pangasinan8.page';

const routes: Routes = [
  {
    path: '',
    component: Pangasinan8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pangasinan8PageRoutingModule {}
