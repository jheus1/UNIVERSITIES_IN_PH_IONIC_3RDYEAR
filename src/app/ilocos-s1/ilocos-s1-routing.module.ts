import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IlocosS1Page } from './ilocos-s1.page';

const routes: Routes = [
  {
    path: '',
    component: IlocosS1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IlocosS1PageRoutingModule {}
