import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NCotabato4Page } from './n-cotabato4.page';

const routes: Routes = [
  {
    path: '',
    component: NCotabato4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NCotabato4PageRoutingModule {}
