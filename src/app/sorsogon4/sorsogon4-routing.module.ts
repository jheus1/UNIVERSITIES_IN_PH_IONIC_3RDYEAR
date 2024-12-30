import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sorsogon4Page } from './sorsogon4.page';

const routes: Routes = [
  {
    path: '',
    component: Sorsogon4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sorsogon4PageRoutingModule {}
