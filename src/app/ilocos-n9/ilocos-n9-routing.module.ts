import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IlocosN9Page } from './ilocos-n9.page';

const routes: Routes = [
  {
    path: '',
    component: IlocosN9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IlocosN9PageRoutingModule {}
