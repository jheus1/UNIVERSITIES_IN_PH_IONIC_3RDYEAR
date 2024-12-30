import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pasay2Page } from './pasay2.page';

const routes: Routes = [
  {
    path: '',
    component: Pasay2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pasay2PageRoutingModule {}
