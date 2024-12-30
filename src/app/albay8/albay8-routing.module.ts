import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Albay8Page } from './albay8.page';

const routes: Routes = [
  {
    path: '',
    component: Albay8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Albay8PageRoutingModule {}
