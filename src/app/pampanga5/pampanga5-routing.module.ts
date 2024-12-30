import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pampanga5Page } from './pampanga5.page';

const routes: Routes = [
  {
    path: '',
    component: Pampanga5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pampanga5PageRoutingModule {}
