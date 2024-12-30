import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IlocosS10Page } from './ilocos-s10.page';

const routes: Routes = [
  {
    path: '',
    component: IlocosS10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IlocosS10PageRoutingModule {}
