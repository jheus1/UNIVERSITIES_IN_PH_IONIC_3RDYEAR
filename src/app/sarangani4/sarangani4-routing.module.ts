import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sarangani4Page } from './sarangani4.page';

const routes: Routes = [
  {
    path: '',
    component: Sarangani4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sarangani4PageRoutingModule {}
