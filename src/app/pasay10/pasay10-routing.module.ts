import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pasay10Page } from './pasay10.page';

const routes: Routes = [
  {
    path: '',
    component: Pasay10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pasay10PageRoutingModule {}
