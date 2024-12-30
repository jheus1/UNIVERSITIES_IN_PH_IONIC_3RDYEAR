import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SCotabatoPage } from './s-cotabato.page';

const routes: Routes = [
  {
    path: '',
    component: SCotabatoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SCotabatoPageRoutingModule {}
