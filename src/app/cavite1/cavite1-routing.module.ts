import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cavite1Page } from './cavite1.page';

const routes: Routes = [
  {
    path: '',
    component: Cavite1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cavite1PageRoutingModule {}
