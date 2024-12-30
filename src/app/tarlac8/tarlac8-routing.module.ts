import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tarlac8Page } from './tarlac8.page';

const routes: Routes = [
  {
    path: '',
    component: Tarlac8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tarlac8PageRoutingModule {}
