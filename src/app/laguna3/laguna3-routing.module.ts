import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Laguna3Page } from './laguna3.page';

const routes: Routes = [
  {
    path: '',
    component: Laguna3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Laguna3PageRoutingModule {}
