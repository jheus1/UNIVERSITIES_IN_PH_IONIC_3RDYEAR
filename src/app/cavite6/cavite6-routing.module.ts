import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cavite6Page } from './cavite6.page';

const routes: Routes = [
  {
    path: '',
    component: Cavite6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cavite6PageRoutingModule {}
