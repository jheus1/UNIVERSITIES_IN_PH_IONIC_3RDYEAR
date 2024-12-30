import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pangasinan6Page } from './pangasinan6.page';

const routes: Routes = [
  {
    path: '',
    component: Pangasinan6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pangasinan6PageRoutingModule {}
