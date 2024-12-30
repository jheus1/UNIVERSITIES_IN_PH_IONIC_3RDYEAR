import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NorthernS9Page } from './northern-s9.page';

const routes: Routes = [
  {
    path: '',
    component: NorthernS9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NorthernS9PageRoutingModule {}
