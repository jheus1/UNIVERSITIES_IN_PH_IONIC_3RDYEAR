import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IlocosS8Page } from './ilocos-s8.page';

const routes: Routes = [
  {
    path: '',
    component: IlocosS8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IlocosS8PageRoutingModule {}
