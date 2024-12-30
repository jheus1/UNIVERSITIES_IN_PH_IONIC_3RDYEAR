import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IlocosN6Page } from './ilocos-n6.page';

const routes: Routes = [
  {
    path: '',
    component: IlocosN6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IlocosN6PageRoutingModule {}
