import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pangasinan5Page } from './pangasinan5.page';

const routes: Routes = [
  {
    path: '',
    component: Pangasinan5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pangasinan5PageRoutingModule {}
