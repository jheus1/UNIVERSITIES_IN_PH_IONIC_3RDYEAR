import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Aklan9Page } from './aklan9.page';

const routes: Routes = [
  {
    path: '',
    component: Aklan9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Aklan9PageRoutingModule {}
