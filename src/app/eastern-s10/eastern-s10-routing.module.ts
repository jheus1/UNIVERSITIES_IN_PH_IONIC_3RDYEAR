import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EasternS10Page } from './eastern-s10.page';

const routes: Routes = [
  {
    path: '',
    component: EasternS10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EasternS10PageRoutingModule {}
