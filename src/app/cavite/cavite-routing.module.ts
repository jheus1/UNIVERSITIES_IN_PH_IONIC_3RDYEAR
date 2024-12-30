import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CavitePage } from './cavite.page';

const routes: Routes = [
  {
    path: '',
    component: CavitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CavitePageRoutingModule {}
