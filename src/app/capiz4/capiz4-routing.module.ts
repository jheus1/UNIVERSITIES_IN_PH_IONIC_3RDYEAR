import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Capiz4Page } from './capiz4.page';

const routes: Routes = [
  {
    path: '',
    component: Capiz4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Capiz4PageRoutingModule {}
