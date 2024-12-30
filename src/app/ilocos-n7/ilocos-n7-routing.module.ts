import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IlocosN7Page } from './ilocos-n7.page';

const routes: Routes = [
  {
    path: '',
    component: IlocosN7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IlocosN7PageRoutingModule {}
