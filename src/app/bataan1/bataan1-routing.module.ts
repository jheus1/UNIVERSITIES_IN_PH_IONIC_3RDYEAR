import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bataan1Page } from './bataan1.page';

const routes: Routes = [
  {
    path: '',
    component: Bataan1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bataan1PageRoutingModule {}
