import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pampanga10Page } from './pampanga10.page';

const routes: Routes = [
  {
    path: '',
    component: Pampanga10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pampanga10PageRoutingModule {}
