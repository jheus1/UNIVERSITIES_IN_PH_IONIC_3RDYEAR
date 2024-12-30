import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZambalesPage } from './zambales.page';

const routes: Routes = [
  {
    path: '',
    component: ZambalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZambalesPageRoutingModule {}
