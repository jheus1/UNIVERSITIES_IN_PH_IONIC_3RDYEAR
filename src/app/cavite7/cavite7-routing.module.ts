import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cavite7Page } from './cavite7.page';

const routes: Routes = [
  {
    path: '',
    component: Cavite7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cavite7PageRoutingModule {}
