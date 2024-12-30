import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NCotabato10Page } from './n-cotabato10.page';

const routes: Routes = [
  {
    path: '',
    component: NCotabato10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NCotabato10PageRoutingModule {}
