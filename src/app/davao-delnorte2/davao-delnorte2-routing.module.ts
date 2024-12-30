import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DavaoDelnorte2Page } from './davao-delnorte2.page';

const routes: Routes = [
  {
    path: '',
    component: DavaoDelnorte2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DavaoDelnorte2PageRoutingModule {}
