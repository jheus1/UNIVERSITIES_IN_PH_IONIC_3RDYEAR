import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Aklan4Page } from './aklan4.page';

const routes: Routes = [
  {
    path: '',
    component: Aklan4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Aklan4PageRoutingModule {}
