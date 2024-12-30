import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EasternS1Page } from './eastern-s1.page';

const routes: Routes = [
  {
    path: '',
    component: EasternS1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EasternS1PageRoutingModule {}
