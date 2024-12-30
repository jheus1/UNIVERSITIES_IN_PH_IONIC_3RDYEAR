import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Leyte4Page } from './leyte4.page';

const routes: Routes = [
  {
    path: '',
    component: Leyte4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Leyte4PageRoutingModule {}
