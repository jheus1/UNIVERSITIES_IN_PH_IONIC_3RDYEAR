import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IlocosN2Page } from './ilocos-n2.page';

const routes: Routes = [
  {
    path: '',
    component: IlocosN2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IlocosN2PageRoutingModule {}
