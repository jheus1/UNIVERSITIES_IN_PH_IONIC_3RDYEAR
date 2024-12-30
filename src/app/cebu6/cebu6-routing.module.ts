import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cebu6Page } from './cebu6.page';

const routes: Routes = [
  {
    path: '',
    component: Cebu6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cebu6PageRoutingModule {}
