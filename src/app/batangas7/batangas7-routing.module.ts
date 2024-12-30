import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Batangas7Page } from './batangas7.page';

const routes: Routes = [
  {
    path: '',
    component: Batangas7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Batangas7PageRoutingModule {}
