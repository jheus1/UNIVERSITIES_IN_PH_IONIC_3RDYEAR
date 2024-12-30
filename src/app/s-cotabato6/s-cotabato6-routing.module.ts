import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SCotabato6Page } from './s-cotabato6.page';

const routes: Routes = [
  {
    path: '',
    component: SCotabato6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SCotabato6PageRoutingModule {}
