import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bataan3Page } from './bataan3.page';

const routes: Routes = [
  {
    path: '',
    component: Bataan3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bataan3PageRoutingModule {}
