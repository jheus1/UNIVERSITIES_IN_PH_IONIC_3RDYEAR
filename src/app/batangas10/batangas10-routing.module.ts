import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Batangas10Page } from './batangas10.page';

const routes: Routes = [
  {
    path: '',
    component: Batangas10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Batangas10PageRoutingModule {}
