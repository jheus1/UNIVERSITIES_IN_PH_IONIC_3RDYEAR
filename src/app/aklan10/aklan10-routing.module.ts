import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Aklan10Page } from './aklan10.page';

const routes: Routes = [
  {
    path: '',
    component: Aklan10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Aklan10PageRoutingModule {}
