import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Paranaque9Page } from './paranaque9.page';

const routes: Routes = [
  {
    path: '',
    component: Paranaque9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Paranaque9PageRoutingModule {}
