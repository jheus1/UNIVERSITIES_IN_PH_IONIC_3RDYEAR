import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Rizal10Page } from './rizal10.page';

const routes: Routes = [
  {
    path: '',
    component: Rizal10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Rizal10PageRoutingModule {}
