import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NorthernS7Page } from './northern-s7.page';

const routes: Routes = [
  {
    path: '',
    component: NorthernS7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NorthernS7PageRoutingModule {}
