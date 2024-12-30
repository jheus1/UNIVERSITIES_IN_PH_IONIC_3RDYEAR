import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Roblon1Page } from './roblon1.page';

const routes: Routes = [
  {
    path: '',
    component: Roblon1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Roblon1PageRoutingModule {}
