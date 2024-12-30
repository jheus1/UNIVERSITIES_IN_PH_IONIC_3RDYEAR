import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Batangas9Page } from './batangas9.page';

const routes: Routes = [
  {
    path: '',
    component: Batangas9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Batangas9PageRoutingModule {}
