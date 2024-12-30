import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Biliran6Page } from './biliran6.page';

const routes: Routes = [
  {
    path: '',
    component: Biliran6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Biliran6PageRoutingModule {}
