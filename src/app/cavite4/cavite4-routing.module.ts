import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cavite4Page } from './cavite4.page';

const routes: Routes = [
  {
    path: '',
    component: Cavite4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cavite4PageRoutingModule {}
