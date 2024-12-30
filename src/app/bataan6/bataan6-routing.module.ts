import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bataan6Page } from './bataan6.page';

const routes: Routes = [
  {
    path: '',
    component: Bataan6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bataan6PageRoutingModule {}
