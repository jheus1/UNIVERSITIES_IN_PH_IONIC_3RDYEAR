import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NegrosOv10Page } from './negros-ov10.page';

const routes: Routes = [
  {
    path: '',
    component: NegrosOv10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NegrosOv10PageRoutingModule {}
