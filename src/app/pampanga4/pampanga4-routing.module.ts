import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pampanga4Page } from './pampanga4.page';

const routes: Routes = [
  {
    path: '',
    component: Pampanga4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pampanga4PageRoutingModule {}
