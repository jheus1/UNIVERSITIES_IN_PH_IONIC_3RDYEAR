import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bohol9Page } from './bohol9.page';

const routes: Routes = [
  {
    path: '',
    component: Bohol9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bohol9PageRoutingModule {}
