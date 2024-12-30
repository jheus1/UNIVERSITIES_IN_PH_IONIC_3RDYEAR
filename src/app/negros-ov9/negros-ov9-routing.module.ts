import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NegrosOv9Page } from './negros-ov9.page';

const routes: Routes = [
  {
    path: '',
    component: NegrosOv9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NegrosOv9PageRoutingModule {}
