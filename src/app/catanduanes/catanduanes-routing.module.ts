import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatanduanesPage } from './catanduanes.page';

const routes: Routes = [
  {
    path: '',
    component: CatanduanesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatanduanesPageRoutingModule {}
