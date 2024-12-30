import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrientalM1Page } from './oriental-m1.page';

const routes: Routes = [
  {
    path: '',
    component: OrientalM1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrientalM1PageRoutingModule {}
