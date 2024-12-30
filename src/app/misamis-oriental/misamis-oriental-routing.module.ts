import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisamisOrientalPage } from './misamis-oriental.page';

const routes: Routes = [
  {
    path: '',
    component: MisamisOrientalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisamisOrientalPageRoutingModule {}
