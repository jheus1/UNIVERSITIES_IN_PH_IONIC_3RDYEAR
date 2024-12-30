import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cagayan4Page } from './cagayan4.page';

const routes: Routes = [
  {
    path: '',
    component: Cagayan4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cagayan4PageRoutingModule {}
