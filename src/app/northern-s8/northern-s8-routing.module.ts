import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NorthernS8Page } from './northern-s8.page';

const routes: Routes = [
  {
    path: '',
    component: NorthernS8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NorthernS8PageRoutingModule {}
