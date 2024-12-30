import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IlocosN5Page } from './ilocos-n5.page';

const routes: Routes = [
  {
    path: '',
    component: IlocosN5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IlocosN5PageRoutingModule {}
