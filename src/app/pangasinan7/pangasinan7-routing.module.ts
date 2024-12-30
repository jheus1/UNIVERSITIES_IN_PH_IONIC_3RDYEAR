import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pangasinan7Page } from './pangasinan7.page';

const routes: Routes = [
  {
    path: '',
    component: Pangasinan7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pangasinan7PageRoutingModule {}
