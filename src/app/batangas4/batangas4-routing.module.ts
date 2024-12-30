import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Batangas4Page } from './batangas4.page';

const routes: Routes = [
  {
    path: '',
    component: Batangas4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Batangas4PageRoutingModule {}
