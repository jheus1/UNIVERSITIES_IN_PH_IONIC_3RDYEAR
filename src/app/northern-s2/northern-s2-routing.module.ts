import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NorthernS2Page } from './northern-s2.page';

const routes: Routes = [
  {
    path: '',
    component: NorthernS2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NorthernS2PageRoutingModule {}
