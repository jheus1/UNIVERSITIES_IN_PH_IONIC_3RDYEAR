import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoholPage } from './bohol.page';

const routes: Routes = [
  {
    path: '',
    component: BoholPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoholPageRoutingModule {}
