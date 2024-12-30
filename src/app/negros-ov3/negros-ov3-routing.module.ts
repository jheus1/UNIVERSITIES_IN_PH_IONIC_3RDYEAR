import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NegrosOv3Page } from './negros-ov3.page';

const routes: Routes = [
  {
    path: '',
    component: NegrosOv3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NegrosOv3PageRoutingModule {}
