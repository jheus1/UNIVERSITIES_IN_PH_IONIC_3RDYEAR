import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Laguna5Page } from './laguna5.page';

const routes: Routes = [
  {
    path: '',
    component: Laguna5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Laguna5PageRoutingModule {}
