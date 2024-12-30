import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Antique4Page } from './antique4.page';

const routes: Routes = [
  {
    path: '',
    component: Antique4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Antique4PageRoutingModule {}
