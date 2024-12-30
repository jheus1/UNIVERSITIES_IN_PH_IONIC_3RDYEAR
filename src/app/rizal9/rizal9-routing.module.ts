import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Rizal9Page } from './rizal9.page';

const routes: Routes = [
  {
    path: '',
    component: Rizal9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Rizal9PageRoutingModule {}
