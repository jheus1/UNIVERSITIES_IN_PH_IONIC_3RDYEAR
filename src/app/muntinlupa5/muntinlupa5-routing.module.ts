import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Muntinlupa5Page } from './muntinlupa5.page';

const routes: Routes = [
  {
    path: '',
    component: Muntinlupa5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Muntinlupa5PageRoutingModule {}
