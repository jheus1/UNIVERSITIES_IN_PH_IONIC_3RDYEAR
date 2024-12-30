import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SCotabato2Page } from './s-cotabato2.page';

const routes: Routes = [
  {
    path: '',
    component: SCotabato2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SCotabato2PageRoutingModule {}
