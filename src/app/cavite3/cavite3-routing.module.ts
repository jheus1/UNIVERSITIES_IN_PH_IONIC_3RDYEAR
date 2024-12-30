import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cavite3Page } from './cavite3.page';

const routes: Routes = [
  {
    path: '',
    component: Cavite3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cavite3PageRoutingModule {}
