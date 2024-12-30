import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NegrosOv2Page } from './negros-ov2.page';

const routes: Routes = [
  {
    path: '',
    component: NegrosOv2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NegrosOv2PageRoutingModule {}
