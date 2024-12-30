import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Antique9Page } from './antique9.page';

const routes: Routes = [
  {
    path: '',
    component: Antique9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Antique9PageRoutingModule {}
