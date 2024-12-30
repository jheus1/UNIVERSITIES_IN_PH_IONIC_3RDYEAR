import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Leyte9Page } from './leyte9.page';

const routes: Routes = [
  {
    path: '',
    component: Leyte9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Leyte9PageRoutingModule {}
