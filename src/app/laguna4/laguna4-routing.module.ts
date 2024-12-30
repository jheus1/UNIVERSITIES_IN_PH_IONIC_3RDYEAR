import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Laguna4Page } from './laguna4.page';

const routes: Routes = [
  {
    path: '',
    component: Laguna4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Laguna4PageRoutingModule {}
