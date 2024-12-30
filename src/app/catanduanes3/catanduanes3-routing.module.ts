import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Catanduanes3Page } from './catanduanes3.page';

const routes: Routes = [
  {
    path: '',
    component: Catanduanes3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Catanduanes3PageRoutingModule {}
