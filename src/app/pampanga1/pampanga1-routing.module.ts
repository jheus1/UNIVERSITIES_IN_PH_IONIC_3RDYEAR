import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pampanga1Page } from './pampanga1.page';

const routes: Routes = [
  {
    path: '',
    component: Pampanga1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pampanga1PageRoutingModule {}
