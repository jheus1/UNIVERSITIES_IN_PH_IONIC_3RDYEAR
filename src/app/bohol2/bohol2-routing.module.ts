import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bohol2Page } from './bohol2.page';

const routes: Routes = [
  {
    path: '',
    component: Bohol2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bohol2PageRoutingModule {}
