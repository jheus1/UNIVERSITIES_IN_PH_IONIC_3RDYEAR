import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamarinesS2Page } from './camarines-s2.page';

const routes: Routes = [
  {
    path: '',
    component: CamarinesS2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamarinesS2PageRoutingModule {}
