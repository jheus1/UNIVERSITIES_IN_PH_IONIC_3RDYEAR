import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cavite5Page } from './cavite5.page';

const routes: Routes = [
  {
    path: '',
    component: Cavite5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cavite5PageRoutingModule {}
