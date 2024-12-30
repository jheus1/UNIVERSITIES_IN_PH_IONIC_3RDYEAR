import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NorthernS6Page } from './northern-s6.page';

const routes: Routes = [
  {
    path: '',
    component: NorthernS6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NorthernS6PageRoutingModule {}
