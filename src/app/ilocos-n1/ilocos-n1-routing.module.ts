import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IlocosN1Page } from './ilocos-n1.page';

const routes: Routes = [
  {
    path: '',
    component: IlocosN1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IlocosN1PageRoutingModule {}
