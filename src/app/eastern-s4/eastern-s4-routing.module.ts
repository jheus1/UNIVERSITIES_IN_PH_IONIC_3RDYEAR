import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EasternS4Page } from './eastern-s4.page';

const routes: Routes = [
  {
    path: '',
    component: EasternS4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EasternS4PageRoutingModule {}
