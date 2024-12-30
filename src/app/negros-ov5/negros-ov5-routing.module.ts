import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NegrosOv5Page } from './negros-ov5.page';

const routes: Routes = [
  {
    path: '',
    component: NegrosOv5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NegrosOv5PageRoutingModule {}
