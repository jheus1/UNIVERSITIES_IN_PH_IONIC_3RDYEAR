import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IlocosS6Page } from './ilocos-s6.page';

const routes: Routes = [
  {
    path: '',
    component: IlocosS6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IlocosS6PageRoutingModule {}
