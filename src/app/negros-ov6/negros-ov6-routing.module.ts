import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NegrosOv6Page } from './negros-ov6.page';

const routes: Routes = [
  {
    path: '',
    component: NegrosOv6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NegrosOv6PageRoutingModule {}
