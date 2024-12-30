import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SultanKudaratPage } from './sultan-kudarat.page';

const routes: Routes = [
  {
    path: '',
    component: SultanKudaratPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SultanKudaratPageRoutingModule {}
