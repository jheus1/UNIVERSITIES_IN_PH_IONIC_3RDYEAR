import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Catanduanes4Page } from './catanduanes4.page';

const routes: Routes = [
  {
    path: '',
    component: Catanduanes4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Catanduanes4PageRoutingModule {}
