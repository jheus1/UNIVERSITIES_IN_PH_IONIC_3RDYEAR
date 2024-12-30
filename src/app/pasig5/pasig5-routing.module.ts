import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pasig5Page } from './pasig5.page';

const routes: Routes = [
  {
    path: '',
    component: Pasig5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pasig5PageRoutingModule {}
