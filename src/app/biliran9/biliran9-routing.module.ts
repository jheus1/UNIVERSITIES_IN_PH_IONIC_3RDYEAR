import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Biliran9Page } from './biliran9.page';

const routes: Routes = [
  {
    path: '',
    component: Biliran9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Biliran9PageRoutingModule {}
