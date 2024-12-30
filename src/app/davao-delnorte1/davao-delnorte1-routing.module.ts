import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DavaoDelnorte1Page } from './davao-delnorte1.page';

const routes: Routes = [
  {
    path: '',
    component: DavaoDelnorte1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DavaoDelnorte1PageRoutingModule {}
