import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Batangas1Page } from './batangas1.page';

const routes: Routes = [
  {
    path: '',
    component: Batangas1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Batangas1PageRoutingModule {}
