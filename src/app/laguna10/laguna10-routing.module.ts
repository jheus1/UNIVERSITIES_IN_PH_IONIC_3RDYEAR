import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Laguna10Page } from './laguna10.page';

const routes: Routes = [
  {
    path: '',
    component: Laguna10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Laguna10PageRoutingModule {}
