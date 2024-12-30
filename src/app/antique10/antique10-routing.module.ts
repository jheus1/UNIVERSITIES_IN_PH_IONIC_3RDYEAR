import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Antique10Page } from './antique10.page';

const routes: Routes = [
  {
    path: '',
    component: Antique10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Antique10PageRoutingModule {}
