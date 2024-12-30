import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pasay9Page } from './pasay9.page';

const routes: Routes = [
  {
    path: '',
    component: Pasay9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pasay9PageRoutingModule {}
