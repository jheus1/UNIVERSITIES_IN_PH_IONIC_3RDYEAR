import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Catanduanes1Page } from './catanduanes1.page';

const routes: Routes = [
  {
    path: '',
    component: Catanduanes1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Catanduanes1PageRoutingModule {}
