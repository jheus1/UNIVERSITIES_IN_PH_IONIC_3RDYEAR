import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NorthernS4Page } from './northern-s4.page';

const routes: Routes = [
  {
    path: '',
    component: NorthernS4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NorthernS4PageRoutingModule {}
