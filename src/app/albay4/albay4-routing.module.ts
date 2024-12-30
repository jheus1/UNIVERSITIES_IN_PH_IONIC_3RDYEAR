import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Albay4Page } from './albay4.page';

const routes: Routes = [
  {
    path: '',
    component: Albay4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Albay4PageRoutingModule {}
