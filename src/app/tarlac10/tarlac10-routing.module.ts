import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tarlac10Page } from './tarlac10.page';

const routes: Routes = [
  {
    path: '',
    component: Tarlac10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tarlac10PageRoutingModule {}
