import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SCotabato9Page } from './s-cotabato9.page';

const routes: Routes = [
  {
    path: '',
    component: SCotabato9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SCotabato9PageRoutingModule {}
