import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrientalM2Page } from './oriental-m2.page';

const routes: Routes = [
  {
    path: '',
    component: OrientalM2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrientalM2PageRoutingModule {}
