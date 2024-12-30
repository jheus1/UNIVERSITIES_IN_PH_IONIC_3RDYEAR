import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IlocosS9Page } from './ilocos-s9.page';

const routes: Routes = [
  {
    path: '',
    component: IlocosS9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IlocosS9PageRoutingModule {}
