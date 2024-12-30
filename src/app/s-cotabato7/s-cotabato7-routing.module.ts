import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SCotabato7Page } from './s-cotabato7.page';

const routes: Routes = [
  {
    path: '',
    component: SCotabato7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SCotabato7PageRoutingModule {}
