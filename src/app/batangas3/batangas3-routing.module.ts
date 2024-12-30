import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Batangas3Page } from './batangas3.page';

const routes: Routes = [
  {
    path: '',
    component: Batangas3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Batangas3PageRoutingModule {}
