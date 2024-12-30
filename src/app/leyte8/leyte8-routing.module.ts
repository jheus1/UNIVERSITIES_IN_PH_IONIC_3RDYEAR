import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Leyte8Page } from './leyte8.page';

const routes: Routes = [
  {
    path: '',
    component: Leyte8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Leyte8PageRoutingModule {}
