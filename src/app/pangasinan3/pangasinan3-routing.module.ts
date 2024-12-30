import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pangasinan3Page } from './pangasinan3.page';

const routes: Routes = [
  {
    path: '',
    component: Pangasinan3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pangasinan3PageRoutingModule {}
