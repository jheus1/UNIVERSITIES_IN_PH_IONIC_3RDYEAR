import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Laguna2Page } from './laguna2.page';

const routes: Routes = [
  {
    path: '',
    component: Laguna2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Laguna2PageRoutingModule {}
