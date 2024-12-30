import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Aklan8Page } from './aklan8.page';

const routes: Routes = [
  {
    path: '',
    component: Aklan8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Aklan8PageRoutingModule {}
