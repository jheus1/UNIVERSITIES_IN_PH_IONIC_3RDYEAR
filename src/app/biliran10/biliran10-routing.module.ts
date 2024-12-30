import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Biliran10Page } from './biliran10.page';

const routes: Routes = [
  {
    path: '',
    component: Biliran10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Biliran10PageRoutingModule {}
