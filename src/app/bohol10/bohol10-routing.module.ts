import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bohol10Page } from './bohol10.page';

const routes: Routes = [
  {
    path: '',
    component: Bohol10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bohol10PageRoutingModule {}
