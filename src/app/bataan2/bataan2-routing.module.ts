import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bataan2Page } from './bataan2.page';

const routes: Routes = [
  {
    path: '',
    component: Bataan2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bataan2PageRoutingModule {}
