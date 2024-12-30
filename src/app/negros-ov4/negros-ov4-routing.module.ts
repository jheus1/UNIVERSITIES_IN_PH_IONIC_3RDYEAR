import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NegrosOv4Page } from './negros-ov4.page';

const routes: Routes = [
  {
    path: '',
    component: NegrosOv4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NegrosOv4PageRoutingModule {}
