import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IlocosS4Page } from './ilocos-s4.page';

const routes: Routes = [
  {
    path: '',
    component: IlocosS4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IlocosS4PageRoutingModule {}
