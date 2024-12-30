import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cebu5Page } from './cebu5.page';

const routes: Routes = [
  {
    path: '',
    component: Cebu5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cebu5PageRoutingModule {}
