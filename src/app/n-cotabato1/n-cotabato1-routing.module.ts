import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NCotabato1Page } from './n-cotabato1.page';

const routes: Routes = [
  {
    path: '',
    component: NCotabato1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NCotabato1PageRoutingModule {}
