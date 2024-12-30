import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pampanga8Page } from './pampanga8.page';

const routes: Routes = [
  {
    path: '',
    component: Pampanga8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pampanga8PageRoutingModule {}
