import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pasay4Page } from './pasay4.page';

const routes: Routes = [
  {
    path: '',
    component: Pasay4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pasay4PageRoutingModule {}
