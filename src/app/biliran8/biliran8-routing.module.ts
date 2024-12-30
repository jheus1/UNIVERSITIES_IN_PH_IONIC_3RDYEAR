import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Biliran8Page } from './biliran8.page';

const routes: Routes = [
  {
    path: '',
    component: Biliran8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Biliran8PageRoutingModule {}
