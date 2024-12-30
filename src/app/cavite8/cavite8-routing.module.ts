import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cavite8Page } from './cavite8.page';

const routes: Routes = [
  {
    path: '',
    component: Cavite8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cavite8PageRoutingModule {}
