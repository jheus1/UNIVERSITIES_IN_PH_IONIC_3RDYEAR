import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Leyte3Page } from './leyte3.page';

const routes: Routes = [
  {
    path: '',
    component: Leyte3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Leyte3PageRoutingModule {}
