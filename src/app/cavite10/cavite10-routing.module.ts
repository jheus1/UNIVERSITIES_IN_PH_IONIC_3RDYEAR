import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cavite10Page } from './cavite10.page';

const routes: Routes = [
  {
    path: '',
    component: Cavite10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cavite10PageRoutingModule {}
