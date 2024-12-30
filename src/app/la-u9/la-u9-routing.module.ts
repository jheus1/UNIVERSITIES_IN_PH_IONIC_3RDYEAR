import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaU9Page } from './la-u9.page';

const routes: Routes = [
  {
    path: '',
    component: LaU9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaU9PageRoutingModule {}
