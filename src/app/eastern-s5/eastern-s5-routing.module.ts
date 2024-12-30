import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EasternS5Page } from './eastern-s5.page';

const routes: Routes = [
  {
    path: '',
    component: EasternS5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EasternS5PageRoutingModule {}
