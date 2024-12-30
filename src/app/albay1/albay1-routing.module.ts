import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Albay1Page } from './albay1.page';

const routes: Routes = [
  {
    path: '',
    component: Albay1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Albay1PageRoutingModule {}
