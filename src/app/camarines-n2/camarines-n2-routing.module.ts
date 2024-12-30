import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamarinesN2Page } from './camarines-n2.page';

const routes: Routes = [
  {
    path: '',
    component: CamarinesN2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamarinesN2PageRoutingModule {}
