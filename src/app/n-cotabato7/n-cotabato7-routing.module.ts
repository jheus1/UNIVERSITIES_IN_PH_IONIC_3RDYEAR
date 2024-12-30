import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NCotabato7Page } from './n-cotabato7.page';

const routes: Routes = [
  {
    path: '',
    component: NCotabato7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NCotabato7PageRoutingModule {}
