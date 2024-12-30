import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Antique1Page } from './antique1.page';

const routes: Routes = [
  {
    path: '',
    component: Antique1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Antique1PageRoutingModule {}
