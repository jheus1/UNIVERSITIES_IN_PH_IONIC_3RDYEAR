import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Aklan6Page } from './aklan6.page';

const routes: Routes = [
  {
    path: '',
    component: Aklan6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Aklan6PageRoutingModule {}
