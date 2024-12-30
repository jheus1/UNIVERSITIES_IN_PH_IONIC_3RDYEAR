import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamarinesS4Page } from './camarines-s4.page';

const routes: Routes = [
  {
    path: '',
    component: CamarinesS4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamarinesS4PageRoutingModule {}
