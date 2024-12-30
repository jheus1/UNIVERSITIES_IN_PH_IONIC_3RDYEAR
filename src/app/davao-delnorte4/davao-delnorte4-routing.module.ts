import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DavaoDelnorte4Page } from './davao-delnorte4.page';

const routes: Routes = [
  {
    path: '',
    component: DavaoDelnorte4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DavaoDelnorte4PageRoutingModule {}
