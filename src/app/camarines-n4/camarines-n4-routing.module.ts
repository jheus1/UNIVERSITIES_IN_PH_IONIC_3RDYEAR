import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamarinesN4Page } from './camarines-n4.page';

const routes: Routes = [
  {
    path: '',
    component: CamarinesN4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamarinesN4PageRoutingModule {}
