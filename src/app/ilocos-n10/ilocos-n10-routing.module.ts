import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IlocosN10Page } from './ilocos-n10.page';

const routes: Routes = [
  {
    path: '',
    component: IlocosN10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IlocosN10PageRoutingModule {}
