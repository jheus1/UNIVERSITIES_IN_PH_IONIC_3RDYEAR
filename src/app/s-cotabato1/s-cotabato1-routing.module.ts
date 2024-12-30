import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SCotabato1Page } from './s-cotabato1.page';

const routes: Routes = [
  {
    path: '',
    component: SCotabato1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SCotabato1PageRoutingModule {}
