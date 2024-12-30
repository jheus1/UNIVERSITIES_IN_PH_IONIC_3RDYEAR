import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamarinesN1Page } from './camarines-n1.page';

const routes: Routes = [
  {
    path: '',
    component: CamarinesN1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamarinesN1PageRoutingModule {}
