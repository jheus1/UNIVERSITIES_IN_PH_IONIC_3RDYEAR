import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IlocosS5Page } from './ilocos-s5.page';

const routes: Routes = [
  {
    path: '',
    component: IlocosS5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IlocosS5PageRoutingModule {}
