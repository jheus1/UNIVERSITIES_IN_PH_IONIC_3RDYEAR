import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bohol4Page } from './bohol4.page';

const routes: Routes = [
  {
    path: '',
    component: Bohol4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bohol4PageRoutingModule {}
