import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EasternS2Page } from './eastern-s2.page';

const routes: Routes = [
  {
    path: '',
    component: EasternS2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EasternS2PageRoutingModule {}
