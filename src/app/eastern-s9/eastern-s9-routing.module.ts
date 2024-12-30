import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EasternS9Page } from './eastern-s9.page';

const routes: Routes = [
  {
    path: '',
    component: EasternS9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EasternS9PageRoutingModule {}
