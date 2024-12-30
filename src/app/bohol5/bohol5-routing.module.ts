import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bohol5Page } from './bohol5.page';

const routes: Routes = [
  {
    path: '',
    component: Bohol5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bohol5PageRoutingModule {}
