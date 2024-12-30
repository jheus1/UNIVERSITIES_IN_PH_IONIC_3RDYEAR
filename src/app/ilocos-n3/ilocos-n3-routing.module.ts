import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IlocosN3Page } from './ilocos-n3.page';

const routes: Routes = [
  {
    path: '',
    component: IlocosN3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IlocosN3PageRoutingModule {}
