import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bataan7Page } from './bataan7.page';

const routes: Routes = [
  {
    path: '',
    component: Bataan7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bataan7PageRoutingModule {}
