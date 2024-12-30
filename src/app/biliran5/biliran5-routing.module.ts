import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Biliran5Page } from './biliran5.page';

const routes: Routes = [
  {
    path: '',
    component: Biliran5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Biliran5PageRoutingModule {}
