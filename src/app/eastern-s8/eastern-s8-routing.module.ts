import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EasternS8Page } from './eastern-s8.page';

const routes: Routes = [
  {
    path: '',
    component: EasternS8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EasternS8PageRoutingModule {}
