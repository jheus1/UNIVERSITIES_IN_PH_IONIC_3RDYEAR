import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Leyte10Page } from './leyte10.page';

const routes: Routes = [
  {
    path: '',
    component: Leyte10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Leyte10PageRoutingModule {}
