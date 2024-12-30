import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaU2Page } from './la-u2.page';

const routes: Routes = [
  {
    path: '',
    component: LaU2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaU2PageRoutingModule {}
