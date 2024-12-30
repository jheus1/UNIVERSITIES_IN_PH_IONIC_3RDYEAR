import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Laguna8Page } from './laguna8.page';

const routes: Routes = [
  {
    path: '',
    component: Laguna8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Laguna8PageRoutingModule {}
