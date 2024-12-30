import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasayPage } from './pasay.page';

const routes: Routes = [
  {
    path: '',
    component: PasayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasayPageRoutingModule {}
