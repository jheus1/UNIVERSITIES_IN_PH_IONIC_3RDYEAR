import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sorsogon1Page } from './sorsogon1.page';

const routes: Routes = [
  {
    path: '',
    component: Sorsogon1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sorsogon1PageRoutingModule {}
