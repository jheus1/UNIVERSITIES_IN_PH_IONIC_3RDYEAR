import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EasternS7Page } from './eastern-s7.page';

const routes: Routes = [
  {
    path: '',
    component: EasternS7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EasternS7PageRoutingModule {}
