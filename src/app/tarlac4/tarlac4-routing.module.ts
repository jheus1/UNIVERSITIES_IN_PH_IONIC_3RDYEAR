import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tarlac4Page } from './tarlac4.page';

const routes: Routes = [
  {
    path: '',
    component: Tarlac4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tarlac4PageRoutingModule {}
