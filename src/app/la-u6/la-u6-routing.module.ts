import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaU6Page } from './la-u6.page';

const routes: Routes = [
  {
    path: '',
    component: LaU6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaU6PageRoutingModule {}
