import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaU4Page } from './la-u4.page';

const routes: Routes = [
  {
    path: '',
    component: LaU4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaU4PageRoutingModule {}
