import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Muntinlupa9Page } from './muntinlupa9.page';

const routes: Routes = [
  {
    path: '',
    component: Muntinlupa9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Muntinlupa9PageRoutingModule {}
