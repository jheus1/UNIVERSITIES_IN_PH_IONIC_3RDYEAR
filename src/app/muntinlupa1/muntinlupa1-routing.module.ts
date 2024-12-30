import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Muntinlupa1Page } from './muntinlupa1.page';

const routes: Routes = [
  {
    path: '',
    component: Muntinlupa1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Muntinlupa1PageRoutingModule {}
