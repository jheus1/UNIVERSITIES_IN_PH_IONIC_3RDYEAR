import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Batangas8Page } from './batangas8.page';

const routes: Routes = [
  {
    path: '',
    component: Batangas8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Batangas8PageRoutingModule {}
