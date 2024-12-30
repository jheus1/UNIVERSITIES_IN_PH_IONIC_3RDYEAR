import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Muntinlupa7Page } from './muntinlupa7.page';

const routes: Routes = [
  {
    path: '',
    component: Muntinlupa7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Muntinlupa7PageRoutingModule {}
