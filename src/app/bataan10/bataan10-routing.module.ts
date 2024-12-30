import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bataan10Page } from './bataan10.page';

const routes: Routes = [
  {
    path: '',
    component: Bataan10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bataan10PageRoutingModule {}
