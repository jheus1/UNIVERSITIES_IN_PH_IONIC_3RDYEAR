import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SCotabato10Page } from './s-cotabato10.page';

const routes: Routes = [
  {
    path: '',
    component: SCotabato10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SCotabato10PageRoutingModule {}
