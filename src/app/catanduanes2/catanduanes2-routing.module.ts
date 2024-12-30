import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Catanduanes2Page } from './catanduanes2.page';

const routes: Routes = [
  {
    path: '',
    component: Catanduanes2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Catanduanes2PageRoutingModule {}
