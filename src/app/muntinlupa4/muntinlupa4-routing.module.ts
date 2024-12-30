import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Muntinlupa4Page } from './muntinlupa4.page';

const routes: Routes = [
  {
    path: '',
    component: Muntinlupa4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Muntinlupa4PageRoutingModule {}
