import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pampanga2Page } from './pampanga2.page';

const routes: Routes = [
  {
    path: '',
    component: Pampanga2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pampanga2PageRoutingModule {}
