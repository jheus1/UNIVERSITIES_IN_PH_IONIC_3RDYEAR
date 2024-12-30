import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pasig4Page } from './pasig4.page';

const routes: Routes = [
  {
    path: '',
    component: Pasig4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pasig4PageRoutingModule {}
