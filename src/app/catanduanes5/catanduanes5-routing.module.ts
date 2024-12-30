import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Catanduanes5Page } from './catanduanes5.page';

const routes: Routes = [
  {
    path: '',
    component: Catanduanes5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Catanduanes5PageRoutingModule {}
