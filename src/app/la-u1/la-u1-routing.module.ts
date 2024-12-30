import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaU1Page } from './la-u1.page';

const routes: Routes = [
  {
    path: '',
    component: LaU1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaU1PageRoutingModule {}
