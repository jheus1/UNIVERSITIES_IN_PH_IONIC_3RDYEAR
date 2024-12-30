import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tarlac5Page } from './tarlac5.page';

const routes: Routes = [
  {
    path: '',
    component: Tarlac5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tarlac5PageRoutingModule {}
