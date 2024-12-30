import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cebu8Page } from './cebu8.page';

const routes: Routes = [
  {
    path: '',
    component: Cebu8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cebu8PageRoutingModule {}
