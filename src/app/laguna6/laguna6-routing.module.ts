import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Laguna6Page } from './laguna6.page';

const routes: Routes = [
  {
    path: '',
    component: Laguna6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Laguna6PageRoutingModule {}
