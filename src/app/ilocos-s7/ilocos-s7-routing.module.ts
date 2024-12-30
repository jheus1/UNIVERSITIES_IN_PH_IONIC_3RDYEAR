import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IlocosS7Page } from './ilocos-s7.page';

const routes: Routes = [
  {
    path: '',
    component: IlocosS7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IlocosS7PageRoutingModule {}
