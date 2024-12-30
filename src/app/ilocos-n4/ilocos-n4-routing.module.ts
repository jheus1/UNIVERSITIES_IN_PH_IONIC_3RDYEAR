import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IlocosN4Page } from './ilocos-n4.page';

const routes: Routes = [
  {
    path: '',
    component: IlocosN4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IlocosN4PageRoutingModule {}
