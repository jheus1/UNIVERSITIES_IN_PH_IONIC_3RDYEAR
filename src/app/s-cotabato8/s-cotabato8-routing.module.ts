import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SCotabato8Page } from './s-cotabato8.page';

const routes: Routes = [
  {
    path: '',
    component: SCotabato8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SCotabato8PageRoutingModule {}
