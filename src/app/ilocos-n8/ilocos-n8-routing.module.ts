import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IlocosN8Page } from './ilocos-n8.page';

const routes: Routes = [
  {
    path: '',
    component: IlocosN8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IlocosN8PageRoutingModule {}
