import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IlocosNPage } from './ilocos-n.page';

const routes: Routes = [
  {
    path: '',
    component: IlocosNPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IlocosNPageRoutingModule {}
