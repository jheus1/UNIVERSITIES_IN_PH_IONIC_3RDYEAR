import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NCotabato9Page } from './n-cotabato9.page';

const routes: Routes = [
  {
    path: '',
    component: NCotabato9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NCotabato9PageRoutingModule {}
