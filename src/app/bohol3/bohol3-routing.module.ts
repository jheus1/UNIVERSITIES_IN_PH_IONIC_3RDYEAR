import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bohol3Page } from './bohol3.page';

const routes: Routes = [
  {
    path: '',
    component: Bohol3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bohol3PageRoutingModule {}
