import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Roblon2Page } from './roblon2.page';

const routes: Routes = [
  {
    path: '',
    component: Roblon2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Roblon2PageRoutingModule {}
