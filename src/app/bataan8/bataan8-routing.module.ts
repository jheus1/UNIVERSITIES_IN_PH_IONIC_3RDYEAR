import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bataan8Page } from './bataan8.page';

const routes: Routes = [
  {
    path: '',
    component: Bataan8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bataan8PageRoutingModule {}
