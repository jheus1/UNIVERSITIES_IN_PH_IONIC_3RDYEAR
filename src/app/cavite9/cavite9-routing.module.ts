import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cavite9Page } from './cavite9.page';

const routes: Routes = [
  {
    path: '',
    component: Cavite9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cavite9PageRoutingModule {}
