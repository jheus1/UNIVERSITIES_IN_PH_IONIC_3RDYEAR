import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NCotabato2Page } from './n-cotabato2.page';

const routes: Routes = [
  {
    path: '',
    component: NCotabato2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NCotabato2PageRoutingModule {}
