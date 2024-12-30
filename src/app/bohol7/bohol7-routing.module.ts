import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bohol7Page } from './bohol7.page';

const routes: Routes = [
  {
    path: '',
    component: Bohol7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bohol7PageRoutingModule {}
