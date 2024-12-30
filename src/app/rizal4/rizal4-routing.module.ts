import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Rizal4Page } from './rizal4.page';

const routes: Routes = [
  {
    path: '',
    component: Rizal4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Rizal4PageRoutingModule {}
