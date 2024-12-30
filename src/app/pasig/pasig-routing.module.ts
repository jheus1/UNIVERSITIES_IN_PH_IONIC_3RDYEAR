import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasigPage } from './pasig.page';

const routes: Routes = [
  {
    path: '',
    component: PasigPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasigPageRoutingModule {}
