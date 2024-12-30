import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bohol8Page } from './bohol8.page';

const routes: Routes = [
  {
    path: '',
    component: Bohol8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bohol8PageRoutingModule {}
