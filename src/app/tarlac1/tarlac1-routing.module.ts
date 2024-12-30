import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tarlac1Page } from './tarlac1.page';

const routes: Routes = [
  {
    path: '',
    component: Tarlac1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tarlac1PageRoutingModule {}
