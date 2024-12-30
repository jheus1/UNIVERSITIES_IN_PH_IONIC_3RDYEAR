import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bohol1Page } from './bohol1.page';

const routes: Routes = [
  {
    path: '',
    component: Bohol1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bohol1PageRoutingModule {}
