import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IlocosS2Page } from './ilocos-s2.page';

const routes: Routes = [
  {
    path: '',
    component: IlocosS2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IlocosS2PageRoutingModule {}
