import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pampanga6Page } from './pampanga6.page';

const routes: Routes = [
  {
    path: '',
    component: Pampanga6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pampanga6PageRoutingModule {}
