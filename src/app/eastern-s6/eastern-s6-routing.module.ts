import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EasternS6Page } from './eastern-s6.page';

const routes: Routes = [
  {
    path: '',
    component: EasternS6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EasternS6PageRoutingModule {}
