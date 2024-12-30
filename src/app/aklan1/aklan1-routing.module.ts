import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Aklan1Page } from './aklan1.page';

const routes: Routes = [
  {
    path: '',
    component: Aklan1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Aklan1PageRoutingModule {}
