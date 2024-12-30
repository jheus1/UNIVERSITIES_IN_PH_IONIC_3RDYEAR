import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bataan9Page } from './bataan9.page';

const routes: Routes = [
  {
    path: '',
    component: Bataan9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bataan9PageRoutingModule {}
