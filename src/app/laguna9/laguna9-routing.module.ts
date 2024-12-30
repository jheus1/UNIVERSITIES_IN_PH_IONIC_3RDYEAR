import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Laguna9Page } from './laguna9.page';

const routes: Routes = [
  {
    path: '',
    component: Laguna9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Laguna9PageRoutingModule {}
