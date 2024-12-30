import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cavite2Page } from './cavite2.page';

const routes: Routes = [
  {
    path: '',
    component: Cavite2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cavite2PageRoutingModule {}
