import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pampanga7Page } from './pampanga7.page';

const routes: Routes = [
  {
    path: '',
    component: Pampanga7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pampanga7PageRoutingModule {}
