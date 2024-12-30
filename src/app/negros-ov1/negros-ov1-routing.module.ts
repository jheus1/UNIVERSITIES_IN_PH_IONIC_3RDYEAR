import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NegrosOv1Page } from './negros-ov1.page';

const routes: Routes = [
  {
    path: '',
    component: NegrosOv1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NegrosOv1PageRoutingModule {}
