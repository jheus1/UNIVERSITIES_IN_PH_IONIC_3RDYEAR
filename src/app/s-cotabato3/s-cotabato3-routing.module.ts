import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SCotabato3Page } from './s-cotabato3.page';

const routes: Routes = [
  {
    path: '',
    component: SCotabato3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SCotabato3PageRoutingModule {}
