import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tarlac7Page } from './tarlac7.page';

const routes: Routes = [
  {
    path: '',
    component: Tarlac7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tarlac7PageRoutingModule {}
