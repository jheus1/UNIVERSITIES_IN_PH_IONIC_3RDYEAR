import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Laguna1Page } from './laguna1.page';

const routes: Routes = [
  {
    path: '',
    component: Laguna1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Laguna1PageRoutingModule {}
