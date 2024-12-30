import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Leyte5Page } from './leyte5.page';

const routes: Routes = [
  {
    path: '',
    component: Leyte5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Leyte5PageRoutingModule {}
