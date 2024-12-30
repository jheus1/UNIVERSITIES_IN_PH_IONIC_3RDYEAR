import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pampanga9Page } from './pampanga9.page';

const routes: Routes = [
  {
    path: '',
    component: Pampanga9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pampanga9PageRoutingModule {}
