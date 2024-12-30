import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Muntinlupa8Page } from './muntinlupa8.page';

const routes: Routes = [
  {
    path: '',
    component: Muntinlupa8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Muntinlupa8PageRoutingModule {}
