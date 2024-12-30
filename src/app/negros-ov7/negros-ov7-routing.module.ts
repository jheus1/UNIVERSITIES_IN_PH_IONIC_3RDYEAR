import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NegrosOv7Page } from './negros-ov7.page';

const routes: Routes = [
  {
    path: '',
    component: NegrosOv7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NegrosOv7PageRoutingModule {}
