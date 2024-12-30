import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Roblon3Page } from './roblon3.page';

const routes: Routes = [
  {
    path: '',
    component: Roblon3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Roblon3PageRoutingModule {}
