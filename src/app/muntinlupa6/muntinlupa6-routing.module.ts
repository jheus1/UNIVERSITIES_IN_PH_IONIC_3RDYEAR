import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Muntinlupa6Page } from './muntinlupa6.page';

const routes: Routes = [
  {
    path: '',
    component: Muntinlupa6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Muntinlupa6PageRoutingModule {}
