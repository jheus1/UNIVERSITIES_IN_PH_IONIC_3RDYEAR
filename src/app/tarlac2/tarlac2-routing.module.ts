import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tarlac2Page } from './tarlac2.page';

const routes: Routes = [
  {
    path: '',
    component: Tarlac2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tarlac2PageRoutingModule {}
