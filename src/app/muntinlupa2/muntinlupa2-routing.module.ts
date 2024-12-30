import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Muntinlupa2Page } from './muntinlupa2.page';

const routes: Routes = [
  {
    path: '',
    component: Muntinlupa2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Muntinlupa2PageRoutingModule {}
