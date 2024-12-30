import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Biliran7Page } from './biliran7.page';

const routes: Routes = [
  {
    path: '',
    component: Biliran7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Biliran7PageRoutingModule {}
