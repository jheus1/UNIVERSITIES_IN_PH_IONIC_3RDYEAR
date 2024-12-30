import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Laguna7Page } from './laguna7.page';

const routes: Routes = [
  {
    path: '',
    component: Laguna7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Laguna7PageRoutingModule {}
