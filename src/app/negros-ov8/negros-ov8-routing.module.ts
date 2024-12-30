import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NegrosOv8Page } from './negros-ov8.page';

const routes: Routes = [
  {
    path: '',
    component: NegrosOv8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NegrosOv8PageRoutingModule {}
