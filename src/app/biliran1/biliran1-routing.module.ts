import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Biliran1Page } from './biliran1.page';

const routes: Routes = [
  {
    path: '',
    component: Biliran1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Biliran1PageRoutingModule {}
