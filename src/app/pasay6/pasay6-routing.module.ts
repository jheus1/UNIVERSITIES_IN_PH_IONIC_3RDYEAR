import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pasay6Page } from './pasay6.page';

const routes: Routes = [
  {
    path: '',
    component: Pasay6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pasay6PageRoutingModule {}
