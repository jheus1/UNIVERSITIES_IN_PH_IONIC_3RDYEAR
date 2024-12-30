import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Rizal2Page } from './rizal2.page';

const routes: Routes = [
  {
    path: '',
    component: Rizal2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Rizal2PageRoutingModule {}
